import React from 'react';

export interface IInput {
	active: boolean;
}

export interface IOutput {
	selectSection(name: string): void;
}

export type IProps = IInput & IOutput;

export default class Header extends React.Component<IProps> {

	onItemClicked = (itemName: string) => {
		this.props.selectSection(itemName);
	}

	render() {
		return (
			<div className={"header " + (this.props.active ? "active" : "")}>
				<div className="container">
					<nav className="navbar navbar-inverse" role="navigation">
						<div className="navbar-header">
							<button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a href="#" className="navbar-brand scroll-top">
								<div className="logo">Azog</div>
							</a>
						</div>
						{/*/.navbar-header*/}
						<div id="main-nav" className="collapse navbar-collapse">
							<ul className="nav navbar-nav">
								<li><a href="#" className="scroll-top" onClick={() => this.onItemClicked('home')}>Home</a></li>
								<li><a href="#" className="scroll-link" onClick={() => this.onItemClicked('about')}>About Us</a></li>
								<li><a href="#" className="scroll-link" onClick={() => this.onItemClicked('portFolio')}>Portfolio</a></li>
								<li><a href="#" className="scroll-link" onClick={() => this.onItemClicked('blog')}>Blog</a></li>
								<li><a href="#" className="scroll-link" onClick={() => this.onItemClicked('contact')}>Contact Us</a></li>
							</ul>
						</div>
						{/*/.navbar-collapse*/}
					</nav>
					{/*/.navbar*/}
				</div>
				{/*/.container*/}
			</div>
		);
	}
}
