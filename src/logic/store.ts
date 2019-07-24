import { BaseStore } from "./redux-utils/redux";
import { Reducer } from "./reducer";
import { IState } from "./state";

const initialState: IState = {
	headerActive: false,
	sectionName: ''
};

export class Store extends BaseStore<IState, Reducer> {
	constructor() {
		super(initialState, new Reducer());
	}
}

export const store = new Store();
