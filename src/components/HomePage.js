import React from 'react';
import { hashLinkScroll } from '../routers/AppRouter';
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';
import PortfolioPage from './PortfolioPage';
import { Fade } from './Transitions';

export class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showPortoflio: false
		};
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		hashLinkScroll();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll = () => {
		if (
			document.getElementById('portfolio').offsetTop -
				window.innerHeight / 2 +
				20 <=
			(document.documentElement.scrollTop || document.body.scrollTop)
		) {
			this.setState({ showPortoflio: true });
			window.removeEventListener('scroll', this.handleScroll);
		}
	};
	render() {
		return (
			<div>
				<div className="home__blurb">
					<Fade key="blurb-title" in appear={true}>
						<div>Software Developer</div>
					</Fade>
					<Fade key="blurb-text" in appear={true}>
						<div>Coding one line at a time...</div>
					</Fade>
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
