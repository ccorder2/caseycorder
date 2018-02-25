import React from 'react';
import { hashLinkScroll } from '../helpers/scroll';
import Header from './Header';
import Footer from './Footer';

export class MainLayout extends React.Component {
	componentDidMount() {
		hashLinkScroll();
	}
	render() {
		return (
			<div className="main">
				<Header />
				<main>{this.props.children}</main>
				<Footer />
			</div>
		);
	}
}

export default MainLayout;
