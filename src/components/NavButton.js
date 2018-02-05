import React from 'react';

class NavButton extends React.Component {
	render() {
		return (
			<div
				className={
					this.props.open ? 'header__nav-icon open' : 'header__nav-icon'
				}
				onClick={this.props.onClick}
			>
				<span />
				<span />
				<span />
			</div>
		);
	}
}

export default NavButton;
