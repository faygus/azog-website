import React from "react";

export default class FunFacts extends React.Component {
	render() {
		return (
			<div id="fun-facts">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-6 col-xs-12">
							<div className="fact-item">
								<div className="counter" data-count="926">0</div>
								<span>Regular Visitors</span>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-12">
							<div className="fact-item">
								<div className="counter" data-count="214">0</div>
								<span>Finished Projects</span>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-12">
							<div className="fact-item">
								<div className="counter" data-count="118">0</div>
								<span>Happy Clients</span>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-12">
							<div className="fact-item">
								<div className="counter" data-count="16">0</div>
								<span>Total Awards</span>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}
