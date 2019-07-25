import React from "react";
import whatWeDoImg from  '../../assets/img/what-we-do-right-image.png';

export default class About extends React.Component {
	render() {
		return (
			<div>
				<div id="about" className="page-section">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="section-heading">
									<h4>What We Do</h4>
									<div className="line-dec"></div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="service-item first-service">
									<div className="icon"></div>
									<h4>Easy Customizations</h4>
									<p>Meteor is free HTML website template by Tooplate. Feel free to use this layout for your project.</p>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="service-item second-service">
									<div className="icon"></div>
									<h4>Creative Ideas</h4>
									<p>Biodiesel schltz suculents phone cliche ramps snackwave coloring book tumeric poke, typewriter.</p>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="service-item third-service">
									<div className="icon"></div>
									<h4>Good Profit</h4>
									<p>Biodiesel schltz suculents phone cliche ramps snackwave coloring book tumeric poke, typewriter.</p>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="service-item fourth-service">
									<div className="icon"></div>
									<h4>Open To Public</h4>
									<p>Biodiesel schltz suculents phone cliche ramps snackwave coloring book tumeric poke, typewriter.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="what-we-do">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="left-text">
									<h4>New offers just arrived,Get it now and take profit.</h4>
									<p>Gochujang pitchfork post-ironic hammock kombucha fanny pack cronut. Raw denim chicharrones semiotics af truffaut pinterest. Distillery letterpress authentic adaptogen. Meditation schlitz humblebrag photo booth celiac cliche chartreuse.Pinterest 90's wolf celiac dreamcatcher listicle deep v semiotics. Intelligentsia literally meggings trust fund put a bird on it. Shoreditch crucifix artisan pug shaman twee. Health goth bicycle rights retro iPhone.</p>
									<ul>
										<li>
											<div className="white-button">
												<a href="#" className="scroll-link" data-id="portfolio">Discover More</a>
											</div>
										</li>
										<li>
											<div className="primary-button">
												<a href="#">Purchase Now</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-6">
								<div className="right-image">
									<img src={whatWeDoImg} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
