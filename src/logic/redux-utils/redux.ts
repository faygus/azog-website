import * as redux from 'redux';

export abstract class BaseReducer<State> {
	private _state: State | undefined;

	setState(state: State) {
		this._state = state;
	}

	protected getState(): State {
		if (!this._state) {
			throw new Error('no state setted for reducer');
		}
		return this._state;
	}
}

export interface IAction {
	type: string;
	args: any[];
}

function randomString() {
	return Math.random()
		.toString(36)
		.substring(7)
		.split('')
		.join('.');
}

type SingleReducer<State, T extends any[]> = (...args: T) => State;

export abstract class BaseDispatcher<State> {
	private _actionTypes = new Map<string, SingleReducer<State, any[]>>();
	private _dispatch: ((action: IAction) => IAction) | undefined;

	constructor(public reducer: BaseReducer<State>) {

	}

	setDispatch(dispatch: (action: IAction) => IAction): void {
		this._dispatch = dispatch;
		(<any>this._dispatch).$$dispatcher = this;
	}

	protected dispatch<T extends any[]>(reducer: SingleReducer<State, T>,
		...args: T): void {
		if (!this._dispatch) {
			throw new Error('no dispach attached');
		}
		this._dispatch({
			type: this.getActionType(reducer),
			args
		});
	}

	private getActionType<T extends any[]>(reducer: SingleReducer<State, T>): string {
		for (const key of Array.from(this._actionTypes.keys())) {
			if (this._actionTypes.get(key) === reducer) {
				return key;
			}
		}
		const type = randomString();
		this._actionTypes.set(type, <any>reducer);
		return type;
	}

	getReducerForAction(actionType: string): SingleReducer<State, any[]> | undefined {
		return this._actionTypes.get(actionType);
	}
}

class Store<State, Dispatcher> {
	constructor(public dispatcher: Dispatcher,
		private _reduxStore: redux.Store<State, IAction>) {

	}

	getState(): State {
		return this._reduxStore.getState();
	}

	subscribe(handler: () => void): redux.Unsubscribe {
		return this._reduxStore.subscribe(handler);
	}

	get reduxStore(): redux.Store<State, IAction> {
		return this._reduxStore;
	}
}

export function buildStore<State, Dispatcher extends BaseDispatcher<State>>(
	initialState: State,
	dispatcher: Dispatcher): Store<State, Dispatcher> {
	const reduxReducer = (state: State | undefined, action: IAction): State => {
		if (!state) state = initialState;
		const type = action.type;
		const singleReducer = dispatcher.getReducerForAction(type);
		if (!singleReducer) {
			console.warn('no reducer for action', type);
			return state;
		}
		dispatcher.reducer.setState(state);
		return singleReducer.bind(dispatcher.reducer)(...action.args);
	};
	const reduxStore = redux.createStore(reduxReducer);
	dispatcher.setDispatch(reduxStore.dispatch);
	return new Store(dispatcher, reduxStore);
}
