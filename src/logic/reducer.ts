import { IState } from "./state";

export interface IReducer {
	activeHeader(state: IState, active: boolean): IState;
	selectSection(state: IState, name: string): IState;
}

export class Reducer implements IReducer {
	activeHeader(state: IState, active: boolean): IState {
		return {
			...state,
			headerActive: active
		};
	}

	selectSection(state: IState, name: string): IState {
		return {
			...state,
			sectionName: name
		};
	}
}
