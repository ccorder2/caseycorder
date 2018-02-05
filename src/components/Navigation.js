import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
	render() {
		return (
			<div className={this.props.show ? 'header__nav show' : 'header__nav'}>
				<NavLink
					to="/about"
					className="header__nav-link"
					activeClassName="active"
				>
					About
				</NavLink>
				<NavLink
					to="/portfolio"
					className="header__nav-link"
					activeClassName="active"
				>
					Portfolio
				</NavLink>
				<NavLink
					to="/blog"
					className="header__nav-link"
					activeClassName="active"
				>
					Blog
				</NavLink>
			</div>
		);
	}
}

export default Navigation;
