import { IState } from "../../../logic/state";
import Header, { IInput, IOutput } from "./Header";
import { IReducer } from "../../../logic/reducer";
import { IDispatcher } from "../../../logic/redux-utils/redux";
import { connect } from "../../../logic/redux-utils/react-redux";

const mapStateToProps = (state: IState): IInput => {
	return {
		active: state.headerActive
	};
};

const mapDispatchToProps = (dispatcher: IDispatcher<IState, IReducer>): IOutput => ({
	selectSection(name: string) {
		dispatcher.selectSection(name);
	}
});

export const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
