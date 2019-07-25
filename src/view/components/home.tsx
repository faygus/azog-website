import React from "react";

export default class Home extends React.Component {
	render() {
		return (
			<section className="cd-hero">
				<ul className="cd-hero-slider autoplay">
					{/*
		<ul className="cd-hero-slider autoplay"> for slider auto play 
		<ul className="cd-hero-slider"> for disabled auto play
*/}
					<li className="selected first-slide">
						<div className="cd-full-width">
							<div className="tm-slide-content-div slide-caption">
								<span>Introduction to</span>
								<h2>Creative Azog</h2>
								<p>Phasellus interdum tortor sem. Quisque sit amet condimentum sem. Phasellus luctus, felis sit amet pulvinar luctus.</p>
								<div className="primary-button">
									<a href="#" className="scroll-link" data-id="about">Discover More</a>
								</div>
							</div>
						</div> {/* .cd-full-width */}
					</li>

					<li className="second-slide">
						<div className="cd-full-width">
							<div className="tm-slide-content-div slide-caption">
								<span>We Are Perfect Staffs</span>
								<h2>Our Team Members</h2>
								<p>Donec dolor ipsum, laoreet nec metus non, tempus elementum massa. Donec non elit rhoncus, vestibulum enim sed, rutrum arcu.</p>
								<div className="primary-button">
									<a href="#">Read More</a>
								</div>
							</div>
						</div> {/* .cd-full-width */}
					</li>

					<li className="third-slide">
						<div className="cd-full-width">
							<div className="tm-slide-content-div slide-caption">
								<span>Design is a hobby</span>
								<h2>Responsive Layout</h2>
								<p>Integer ut dolor eget magna congue gravida ut at arcu. Vivamus maximus neque quis luctus tempus. Vestibulum consequat.</p>
								<div className="primary-button">
									<a href="#">View Details</a>
								</div>
							</div>
						</div> {/* .cd-full-width */}
					</li>
				</ul> {/* .cd-hero-slider */}

				<div className="cd-slider-nav">
					<nav>
						<span className="cd-marker item-1"></span>

						<ul>
							<li className="selected"><a href="#0"></a></li>
							<li><a href="#0"></a></li>
							<li><a href="#0"></a></li>
						</ul>
					</nav>
				</div> {/* .cd-slider-nav */}
			</section> /* .cd-hero */
		);
	}
}
