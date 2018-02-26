import React from 'react';
import { NavLink } from 'react-router-dom';
import NavButton from './NavButton';
import Navigation from './Navigation';

export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}
	onClick = () => {
		this.setState(prevState => ({ open: !prevState.open }));
	};

	render() {
		return (
			<header>
				<div className="header">
					<div className="content-container">
						<div className="header__content">
							<NavLink to="/" className="header__logo">
								<div className="header__logo-content">
									<div>Casey Corder</div>
									<div>Software Developer</div>
								</div>
							</NavLink>
							<NavButton open={this.state.open} onClick={this.onClick} />
							<Navigation show={this.state.open} onClick={this.onClick} />
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
