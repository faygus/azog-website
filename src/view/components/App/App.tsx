import React from 'react';
import './App.css';
import { verticalScrollTo } from '../../utils/animate-scroll';
import { ConnectedHeader } from '../header/provider';
import { Provider } from 'react-redux';
import { store } from '../../../logic/store';
import Home from '../home';
import About from '../about';
import Portfolio from '../portfolio';
import Blog from '../blog';
import FunFacts from '../fun-facts';
import Contact from '../contact';
import Footer from '../footer';

export default class App extends React.Component {
	private _focusSectionName = '';
	ref = React.createRef<HTMLDivElement>();
	homeRef = React.createRef<Home>();
	aboutRef = React.createRef<About>();
	childrenRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
		'home': React.createRef<HTMLDivElement>(),
		'about': React.createRef<HTMLDivElement>(),
		'portFolio': React.createRef<HTMLDivElement>(),
		'blog': React.createRef<HTMLDivElement>(),
		'contact': React.createRef<HTMLDivElement>(),
	};

	constructor(props: {}) {
		super(props);
		this.listenSectionSelected();
	}

	private listenSectionSelected(): void {
		store.subscribe(() => {
			const state = store.getState();
			const itemName = state.sectionName;
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
		store.dispatcher.activeHeader(element.scrollTop > 200);
	}

	render() {
		const homeRef = this.childrenRefs.home;
		const aboutRef = this.childrenRefs.about;
		const portFolioRef = this.childrenRefs.portFolio;
		const blogRef = this.childrenRefs.blog;
		const contactRef = this.childrenRefs.contact;

		return (
			<Provider store={store.reduxStore}>
				<div ref={this.ref} className="App" onScroll={event => this.onScroll(event)}>
					<ConnectedHeader/>
					<div ref={homeRef}>
						<Home/>
					</div>
					<div ref={aboutRef}>
						<About/>
					</div>
					<div ref={portFolioRef}>
						<Portfolio/>
					</div>
					<div ref={blogRef}>
						<Blog/>
					</div>
					<FunFacts/>
					
					<div ref={contactRef}>
						<Contact/>
					</div>
					<Footer/>
				</div>
			</Provider>
		);
	}
}
