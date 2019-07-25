import { IState } from "./state";
import { buildStore } from "./redux-utils/redux";
import { Dispatcher, Reducer } from "./reducer";

const initialState: IState = {
	headerActive: false,
	sectionName: ''
};

export const store = buildStore(initialState, new Dispatcher(new Reducer()));
