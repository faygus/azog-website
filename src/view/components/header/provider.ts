import { IState } from "../../../logic/state";
import Header, { IInput, IOutput } from "./Header";
import { IDispatcher } from "../../../logic/reducer";
import { connect } from "../../../logic/redux-utils/react-redux";

const mapStateToProps = (state: IState): IInput => {
	return {
		active: state.headerActive
	};
};

const mapDispatchToProps = (dispatcher: IDispatcher): IOutput => ({
	selectSection(name: string) {
		dispatcher.selectSection(name);
	}
});

export const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
