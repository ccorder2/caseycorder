import React from 'react';

export class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showTitle: false
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({ showTitle: true });
		}, 500);
	}
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
			</div>
		);
	}
}

export default HomePage;
