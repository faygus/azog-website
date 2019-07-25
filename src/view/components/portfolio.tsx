import React from "react";
import portfolio01Img from '../../assets/img/portfolio_01.jpg';
import portfolioBig01Img from '../../assets/img/portfolio_big_01.jpg';
import portfolio02Img from '../../assets/img/portfolio_02.jpg';
import portfolioBig02Img from '../../assets/img/portfolio_big_02.jpg';
import portfolio03Img from '../../assets/img/portfolio_03.jpg';
import portfolioBig03Img from '../../assets/img/portfolio_big_03.jpg';
import portfolio04Img from '../../assets/img/portfolio_04.jpg';
import portfolioBig04Img from '../../assets/img/portfolio_big_04.jpg';
import portfolio05Img from '../../assets/img/portfolio_05.jpg';
import portfolioBig05Img from '../../assets/img/portfolio_big_05.jpg';
import portfolio06Img from '../../assets/img/portfolio_06.jpg';
import portfolioBig06Img from '../../assets/img/portfolio_big_06.jpg';
import portfolio07Img from '../../assets/img/portfolio_07.jpg';
import portfolioBig07Img from '../../assets/img/portfolio_big_07.jpg';
import portfolio08Img from '../../assets/img/portfolio_08.jpg';
import portfolioBig08Img from '../../assets/img/portfolio_big_08.jpg';

export default class Portfolio extends React.Component {
	render() {
		return (
			<div id="portfolio" className="page-section">
				<div className="content-wrapper">
					<div className="inner-container container">
						<div className="row">
							<div className="col-md-12">
								<div className="section-heading">
									<h4>Our Portfolio</h4>
									<div className="line-dec"></div>
								</div>
							</div>
						</div>
						<div className="projects-holder-3">
							<div className="filter-categories">
								<ul className="project-filter">
									<li className="filter" data-filter="all"><span>All</span></li>
									<li className="filter" data-filter="nature"><span>Nature</span></li>
									<li className="filter" data-filter="workspace"><span>Workspace</span></li>
									<li className="filter" data-filter="city"><span>City</span></li>
									<li className="filter" data-filter="technology"><span>Technology</span></li>
								</ul>
							</div>
							<div className="projects-holder">
								<div className="row">
									<div className="col-md-3 col-sm-6 project-item mix workspace">
										<div className="thumb">
											<div className="image">
												<img src={portfolio01Img} />
											</div>
											<div className="hover-effect">
												<a href={portfolioBig01Img} data-lightbox="image-1"><i className="fa fa-search"></i></a>
											</div>
										</div>
									</div>
									<div className="col-md-3 col-sm-6 project-item mix workspace">
										<div className="thumb">
											<div className="image">
												<img src={portfolio02Img} />
											</div>
											<div className="hover-effect">
												<a href={portfolioBig02Img} data-lightbox="image-1"><i className="fa fa-search"></i></a>
											</div>
										</div>
									</div>
									<div className="col-md-3 col-sm-6 project-item mix technology">
										<div className="thumb">
											<div className="image">
												<img src={portfolio03Img} />
											</div>
											<div className="hover-effect">
												<a href={portfolioBig03Img} data-lightbox="image-1"><i className="fa fa-search"></i></a>
											</div>
										</div>
									</div>
									<div className="col-md-3 col-sm-6 project-item mix city">
										<div className="thumb">
											<div className="image">
												<img src={portfolio04Img} />
											</div>
											<div className="hover-effect">
												<a href={portfolioBig04Img} data-lightbox="image-1"><i className="fa fa-search"></i></a>
											</div>
										</div>
									</div>
									<div className="col-md-3 col-sm-6 project-item mix nature">
										<div className="thumb">
											<div className="image">
												<img src={portfolio05Img} />
											</div>
											<div className="hover-effect">
												<a href={portfolioBig05Img} data-lightbox="image-1"><i className="fa fa-search"></i></a>
											</div>
										</div>
									</div>
									<div className="col-md-3 col-sm-6 project-item mix technology">
										<div className="thumb">
											<div className="image">
												<img src={portfolio06Img} />
											</div>
											<div className="hover-effect">
												<a href={portfolioBig06Img} data-lightbox="image-1"><i className="fa fa-search"></i></a>
											</div>
										</div>
									</div>
									<div className="col-md-3 col-sm-6 project-item mix workspace">
										<div className="thumb">
											<div className="image">
												<img src={portfolio07Img} />
											</div>
											<div className="hover-effect">
												<a href={portfolioBig07Img} data-lightbox="image-1"><i className="fa fa-search"></i></a>
											</div>
										</div>
									</div>
									<div className="col-md-3 col-sm-6 project-item mix city">
										<div className="thumb">
											<div className="image">
												<img src={portfolio08Img} />
											</div>
											<div className="hover-effect">
												<a href={portfolioBig08Img} data-lightbox="image-1"><i className="fa fa-search"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}