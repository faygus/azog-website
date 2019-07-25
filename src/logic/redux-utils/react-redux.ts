import * as reactRedux from "react-redux";

export function connect<Output, Input, OwnProps, State, Dispatcher>(
	mapStateToProps:
		reactRedux.MapStateToPropsParam<Input, OwnProps, State>,
	mapDispatchToProps:
		(dispatcher: Dispatcher) => Output):
	reactRedux.InferableComponentEnhancerWithProps<Input & Output, OwnProps> {
	const reduxMapDispatchToProps = (dispatch: any) => {
		const dispatcher = dispatch.$$dispatcher;
		return mapDispatchToProps(dispatcher);
	}
	return reactRedux.connect(mapStateToProps, reduxMapDispatchToProps);
}
