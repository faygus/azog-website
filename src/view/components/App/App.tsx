import React from 'react';
import './App.css';
import { verticalScrollTo } from '../../utils/animate-scroll';
import { ConnectedHeader } from '../header/provider';
import { Provider } from 'react-redux';
import { store } from '../../../logic/store';

export default class App extends React.Component {
	private _focusSectionName = '';
	ref = React.createRef<HTMLDivElement>();
	childrenRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
		'about': React.createRef<HTMLDivElement>(),
		'portFolio': React.createRef<HTMLDivElement>(),
		'blog': React.createRef<HTMLDivElement>(),
		'contact': React.createRef<HTMLDivElement>(),
	};
	get aboutRef() {
		return this.childrenRefs.about;
	}
	get portFolioRef() {
		return this.childrenRefs.portFolio;
	}
	get blogRef() {
		return this.childrenRefs.blog;
	}
	get contactRef() {
		return this.childrenRefs.contact;
	}

	constructor(props: {}) {
		super(props);
		this.listenSectionSelected();
	}

	componentDidMount() {
		if (!this.ref.current) return;
		/*this.ref.current.onscroll((e: Event) => {
			// documentScroll(e);
		});*/

	}

	private listenSectionSelected(): void {
		store.reduxStore.subscribe(() => {
			const itemName = store.getState().sectionName;
			if (itemName === this._focusSectionName) return;
			this._focusSectionName = itemName;
			const ref = this.childrenRefs[itemName];
			if (!ref) {
				console.warn('no ref associated with', itemName);
				return;
			}
			if (!this.ref.current) {
				console.warn('no main ref', itemName);
				return;
			}
			if (!ref.current) {
				return;
			}
			const offset = ref.current.offsetTop;
			verticalScrollTo(this.ref.current, offset, 850);
		});
	}

	onScroll = (event: React.UIEvent<HTMLDivElement>) => {
		const element = event.target as HTMLDivElement;
		store.dispatcher.activeHeader(element.scrollTop > 1000);
	}

	render() {
		return (
			<Provider store={store.reduxStore}>
				<div ref={this.ref} className="App" onScroll={event => this.onScroll(event)}>
					<ConnectedHeader/>
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
					</section> {/* .cd-hero */}

					<div ref={this.aboutRef} id="about" className="page-section">
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
															<img src="img/what-we-do-right-image.png" alt=""/>
													</div>
											</div>
									</div>
							</div>
					</div>

					<div ref={this.portFolioRef} id="portfolio" className="page-section">
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
																					<img src="img/portfolio_01.jpg"/>
																				</div>
																				<div className="hover-effect">
																					<a href="img/portfolio_big_01.jpg" data-lightbox="image-1"><i className="fa fa-search"></i></a>
																				</div>
																		</div>
																	</div>
																	<div className="col-md-3 col-sm-6 project-item mix workspace">
																		<div className="thumb">
																				<div className="image">
																					<img src="img/portfolio_02.jpg"/>
																				</div>
																				<div className="hover-effect">
																					<a href="img/portfolio_big_02.jpg" data-lightbox="image-1"><i className="fa fa-search"></i></a>
																				</div>
																		</div>
																	</div>
																	<div className="col-md-3 col-sm-6 project-item mix technology">
																		<div className="thumb">
																				<div className="image">
																					<img src="img/portfolio_03.jpg"/>
																				</div>
																				<div className="hover-effect">
																					<a href="img/portfolio_big_03.jpg" data-lightbox="image-1"><i className="fa fa-search"></i></a>
																				</div>
																		</div>
																	</div>
																	<div className="col-md-3 col-sm-6 project-item mix city">
																		<div className="thumb">
																				<div className="image">
																					<img src="img/portfolio_04.jpg"/>
																				</div>
																				<div className="hover-effect">
																					<a href="img/portfolio_big_04.jpg" data-lightbox="image-1"><i className="fa fa-search"></i></a>
																				</div>
																		</div>
																	</div>
																	<div className="col-md-3 col-sm-6 project-item mix nature">
																		<div className="thumb">
																				<div className="image">
																					<img src="img/portfolio_05.jpg"/>
																				</div>
																				<div className="hover-effect">
																					<a href="img/portfolio_big_05.jpg" data-lightbox="image-1"><i className="fa fa-search"></i></a>
																				</div>
																		</div>
																	</div>
																	<div className="col-md-3 col-sm-6 project-item mix technology">
																		<div className="thumb">
																				<div className="image">
																					<img src="img/portfolio_06.jpg"/>
																				</div>
																				<div className="hover-effect">
																					<a href="img/portfolio_big_06.jpg" data-lightbox="image-1"><i className="fa fa-search"></i></a>
																				</div>
																		</div>
																	</div>
																	<div className="col-md-3 col-sm-6 project-item mix workspace">
																		<div className="thumb">
																				<div className="image">
																					<img src="img/portfolio_07.jpg"/>
																				</div>
																				<div className="hover-effect">
																					<a href="img/portfolio_big_07.jpg" data-lightbox="image-1"><i className="fa fa-search"></i></a>
																				</div>
																		</div>
																	</div>
																	<div className="col-md-3 col-sm-6 project-item mix city">
																		<div className="thumb">
																				<div className="image">
																					<img src="img/portfolio_08.jpg"/>
																				</div>
																				<div className="hover-effect">
																					<a href="img/portfolio_big_08.jpg" data-lightbox="image-1"><i className="fa fa-search"></i></a>
																				</div>
																		</div>
																	</div>
															</div>
													</div>
											</div>
									</div>
							</div> 
					</div>

					<div ref={this.blogRef} id="blog" className="page-section">
							<div className="container">
									<div className="row">
											<div className="col-md-12">
													<div className="section-heading">
															<h4>Our Blog Posts</h4>
															<div className="line-dec"></div>
													</div>
											</div>
									</div>
									<div className="row">
											<div className="col-md-6">
													<div className="blog-item b1">
															<div className="thumb">
																	<img src="img/blog_01.jpg" alt=""/>
																	<div className="text-content">
																			<h4>Delecioius Food Served</h4>
																			<span>Posted: <em>George</em>  /  Date: <em>11 Aug 2017</em>  /  Category: <em>Design</em></span>
																	</div>
															</div>
													</div>
											</div>
											<div className="col-md-6">
													<div className="blog-item second-blog b2">
															<div className="thumb">
																	<img src="img/blog_02.jpg" alt=""/>
																	<div className="text-content">
																			<h4>Creative &amp; Clean Workspace</h4>
																			<span>Posted: <em>Kerley</em>  /  Date: <em>24 Jul 2017</em>  /  Category: <em>Artwork</em></span>
																	</div>
															</div>
													</div>
											</div>
											<div className="col-md-6">
													<div className="blog-item b3">
															<div className="thumb">
																	<img src="img/blog_03.jpg" alt=""/>
																	<div className="text-content">
																			<h4>Crashed Plane Captured</h4>
																			<span>Posted: <em>Johnny</em>  /  Date: <em>16 Jul 2017</em>  /  Category: <em>Branding</em></span>
																	</div>
															</div>
													</div>
											</div>
									</div>
									<div className="row">
											<div className="col-md-12">
													<div className="pop">
														<span>✖</span>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis neque lacinia, porta nulla in, pellentesque ante. Vivamus in luctus mauris, non pharetra nibh. Morbi porttitor nisl sit amet velit pellentesque consequat. Etiam blandit libero turpis, id vehicula leo posuere a. In vel massa sollicitudin, tincidunt massa et, tincidunt ex.Duis volutpat condimentum mollis. Sed eleifend libero ut viverra mattis. Suspendisse consectetur diam dolor, ut efficitur sem finibus vel. Vivamus tristique lacus sed dapibus varius. Fusce pharetra, quam quis congue pretium, ante dui imperdiet ipsum, eget lobortis leo leo sed diam.</p>
													</div>
													<div className="pop2">
														<span>✖</span>
														<p>Praesent purus leo, aliquet et efficitur id, pulvinar scelerisque enim. Maecenas a arcu sagittis, ornare ante ut, suscipit lectus. Donec dolor ipsum, laoreet nec metus non, tempus elementum massa. Donec non elit rhoncus, vestibulum enim sed, rutrum arcu. Vestibulum et purus ac diam condimentum volutpat sed ac est. Phasellus interdum tortor sem. Quisque sit amet condimentum sem. Phasellus luctus, felis sit amet pulvinar luctus, lectus dui mattis tellus, et placerat nunc ante at lacus.Vivamus vestibulum, nisi sed placerat accumsan, felis felis venenatis tortor, vel condimentum arcu neque vel mauris. Donec a magna gravida, egestas libero non, molestie massa. Integer ut dolor eget magna congue gravida ut at arcu. Vivamus maximus neque quis luctus tempus. Vestibulum consequat a justo id feugiat. </p>
													</div>
													<div className="pop3">
														<span>✖</span>
														<p>Nullam rhoncus, orci et iaculis sodales, quam lectus suscipit augue, ut auctor massa dolor id metus. Nulla porta ut diam sodales dignissim. Ut sit amet augue vel justo laoreet dignissim. Maecenas vitae sollicitudin eros. In commodo placerat cursus. Quisque malesuada, nisl ac lacinia commodo, justo eros maximus ex, quis cursus odio erat at neque. Sed tincidunt eu dolor eget posuere.Curabitur sit amet elit sit amet ligula eleifend aliquam quis eget quam. Mauris id mi nec justo venenatis tincidunt at ac massa. Sed et volutpat nunc. Quisque at urna quam. Duis sit amet neque eget quam iaculis iaculis. Quisque maximus porta elementum. Nam ac mattis erat, quis accumsan odio.</p>
													</div>
											</div>
									</div>
							</div>
					</div>

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

					<div ref={this.contactRef} id="contact" className="page-section">
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
															<img src="img/map.jpg" alt=""/>
													</div>
											</div>
											<div className="col-md-6">
													<div className="row">
														<form id="contact" action="" method="post">
															<div className="col-md-6">
																<fieldset>
																	<input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required/>
																</fieldset>
															</div>
															<div className="col-md-6">
																<fieldset>
																	<input name="email" type="email" className="form-control" id="email" placeholder="Your email..." required/>
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
				</div>
			</Provider>
		);
	}
}
