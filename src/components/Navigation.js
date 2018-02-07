import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
	render() {
		return (
			<div className={this.props.show ? 'header__nav show' : 'header__nav'}>
				<Link
					to="/#about"
					className="header__nav-link"
					onClick={this.props.onClick}
				>
					About
				</Link>
				<Link
					to="/#portfolio"
					className="header__nav-link"
					onClick={this.props.onClick}
				>
					Portfolio
				</Link>
				<Link
					to="/#blog"
					className="header__nav-link"
					onClick={this.props.onClick}
				>
					Blog
				</Link>
			</div>
		);
	}
}

export default Navigation;
