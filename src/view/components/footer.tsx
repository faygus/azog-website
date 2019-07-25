import React from "react";

export default class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
								<div className="copyright-text">
										<p>Copyright &copy; 2017 Company Name 
											
											- Design: Tooplate</p>
								</div>
						</div>
						<div className="col-md-6">
									<div className="social-icons">
											<ul>
													<li>
															<a href="#"><i className="fa fa-facebook"></i></a>
													</li>
													<li>
															<a href="#"><i className="fa fa-twitter"></i></a>
													</li>
													<li>
															<a href="#"><i className="fa fa-linkedin"></i></a>
													</li>
													<li>
															<a href="#"><i className="fa fa-rss"></i></a>
													</li>
													<li>
															<a href="#"><i className="fa fa-dribbble"></i></a>
													</li>
											</ul>
									</div>
							</div>
					</div>
				</div>
			</footer>
		);
	}
}
