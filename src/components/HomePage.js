import React from 'react';
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';
import PortfolioPage from './PortfolioPage';
import Fade from './transitions/Fade';
import { isInView } from '../helpers/scroll';

export class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showAboutTitle: false,
			showBlogTitle: false,
			showPortBlurb: false,
			showPortTitle: false
		};
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll = () => {
		if (isInView('aboutTitle', 0)) {
			this.setState(() => ({ showAboutTitle: true }));
		}
		if (isInView('blogTitle', 0)) {
			this.setState(() => ({ showBlogTitle: true }));
		}
		if (isInView('portfolioBlurb', 250)) {
			this.setState(() => ({ showPortBlurb: true }));
		}
		if (isInView('portfolioTitle', 0)) {
			this.setState(() => ({ showPortTitle: true }));
		}
	};
	render() {
		return (
			<div>
				<div className="home__blurb">
					<Fade key="blurb-title" in appear={true} timeout={0}>
						<div>Full stack Microsoft developer</div>
					</Fade>
					<Fade key="blurb-text" in appear={true} timeout={500}>
						<div>Coding one line at a time...</div>
					</Fade>
				</div>
				<div id="about">
					<AboutPage showTitle={this.state.showAboutTitle} />
				</div>
				<div id="portfolio">
					<PortfolioPage
						showBlurb={this.state.showPortBlurb}
						showTitle={this.state.showPortTitle}
					/>
				</div>
				<div id="blog">
					<BlogPage showTitle={this.state.showBlogTitle} />
				</div>
			</div>
		);
	}
}

export default HomePage;
