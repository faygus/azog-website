import * as reactRedux from "react-redux";
import { IDispatcher } from "./redux";

export function connect<Reducer, Output, Input, OwnProps, State>(
	mapStateToProps:
		reactRedux.MapStateToPropsParam<Input, OwnProps, State>,
	mapDispatchToProps:
		(dispatcher: IDispatcher<State, Reducer>) => Output):
	reactRedux.InferableComponentEnhancerWithProps<Input & Output, OwnProps> {
	const reduxMapDispatchToProps = (dispatch: any) => {
		const dispatcher = dispatch.$$dispatcher;
		return mapDispatchToProps(dispatcher);
	}
	return reactRedux.connect(mapStateToProps, reduxMapDispatchToProps);
}
