import * as redux from "redux";

type SingleReducer<State, Payload> = (state: State, payload: Payload) => State;

export type IDispatcher<State, Reducer> = {
	[P in keyof Reducer]: Reducer[P] extends (state: State, ...args: infer U) => State ?
	(...args: U) => void : never;
}

interface IAction {
	type: string;
	payload: any;
}

export abstract class BaseStore<State, Reducer> {
	private _dispatcher: IDispatcher<State, Reducer>;
	private _reduxStore: redux.Store<State, IAction>;

	constructor(initialState: State,
		protected _reducer: Reducer) {
		const reducer = (state: State = initialState, action: IAction): State => {
			const singleReducer = (_reducer as any)[action.type];
			if (!singleReducer) {
				console.warn('no reducer found for', action.type);
				return state;
			}
			return singleReducer(state, action.payload);
		}
		this._reduxStore = redux.createStore(reducer);
		this._dispatcher = this.buildDispatcher();
	}

	private buildDispatcher(): IDispatcher<State, Reducer> {
		let res: any = {};
		const proto = Object.getPrototypeOf(this._reducer);
		const keys = Object.getOwnPropertyNames(proto).filter(a => a !== 'constructor');
		for (const prop of keys) {
			res[prop] = (payload: any) => {
				this._reduxStore.dispatch({
					type: prop,
					payload
				});
			};
		}
		(<any>this._reduxStore.dispatch).$$dispatcher = res;
		return res;
	}

	get reduxStore(): redux.Store<State, IAction> {
		return this._reduxStore;
	}

	get dispatcher(): IDispatcher<State, Reducer> {
		return this._dispatcher;
	}

	getState(): State {
		return this._reduxStore.getState();
	}
}
