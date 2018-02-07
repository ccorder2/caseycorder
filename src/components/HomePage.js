import React from 'react';
import { hashLinkScroll } from '../routers/AppRouter';
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';
import PortfolioPage from './PortfolioPage';

export class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showTitle: false,
			showPortoflio: false
		};
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		hashLinkScroll();
		setTimeout(() => {
			this.setState({ showTitle: true });
		}, 500);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll = () => {
		if (
			document.getElementById('portfolio').offsetTop <=
			document.documentElement.scrollTop
		) {
			this.setState({ showPortoflio: true });
			window.removeEventListener('scroll', this.handleScroll);
		}
	};
	render() {
		return (
			<div>
				<div className="home__blurb">
					<div className={this.state.showTitle ? 'show' : ''}>Casey Corder</div>
					<div className={this.state.showTitle ? 'show' : ''}>
						Software Developer
					</div>
					<div className={this.state.showTitle ? 'show' : ''}>
						Coding one line at a time...
					</div>
				</div>
				<div id="about">
					<AboutPage />
				</div>
				<div id="portfolio">
					<PortfolioPage show={this.state.showPortoflio} />
				</div>
				<div id="blog">
					<BlogPage />
				</div>
			</div>
		);
	}
}

export default HomePage;
