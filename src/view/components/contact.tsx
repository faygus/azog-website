import React from "react";
import mapImg from '../../assets/img/map.jpg';

export default class Contact extends React.Component {
	render() {
		return (
			<div id="contact" className="page-section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-heading">
								<h4>Contact Us</h4>
								<div className="line-dec"></div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="map">
								<img src={mapImg} alt="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="row">
								<form id="contact" action="" method="post">
									<div className="col-md-6">
										<fieldset>
											<input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required />
										</fieldset>
									</div>
									<div className="col-md-6">
										<fieldset>
											<input name="email" type="email" className="form-control" id="email" placeholder="Your email..." required />
										</fieldset>
									</div>
									<div className="col-md-12">
										<fieldset>
											<textarea name="message" rows={6} className="form-control" id="message" placeholder="Your message..." required></textarea>
										</fieldset>
									</div>
									<div className="col-md-12">
										<fieldset>
											<button type="submit" id="form-submit" className="btn">Send Message</button>
										</fieldset>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}