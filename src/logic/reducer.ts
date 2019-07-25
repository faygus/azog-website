import { IState } from "./state";
import { BaseReducer, BaseDispatcher } from "./redux-utils/redux";

export interface IDispatcher {
	activeHeader(active: boolean): void;
	selectSection(name: string): void;
}

export class Reducer extends BaseReducer<IState> {
	activeHeader(active: boolean): IState {
		return {
			...this.getState(),
			headerActive: active
		};
	}

	selectSection(name: string): IState {
		return {
			...this.getState(),
			sectionName: name
		};
	}
}

export class Dispatcher extends BaseDispatcher<IState> implements IDispatcher {
	constructor(private _reducer: Reducer) {
		super(_reducer);
	}

	activeHeader(active: boolean): void {
		this.dispatch(this._reducer.activeHeader, active);
	}

	selectSection(name: string): void {
		this.dispatch(this._reducer.selectSection, name);
	}
}
