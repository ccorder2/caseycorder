import React from 'react';

export class AboutPage extends React.Component {
	render() {
		return (
			<div className="about">
				<div className="content-container">
					<div className="about__greeting-content">
						<div className="about__greeting">
							<span>Greetings</span>, I'm Casey Corder--full stack Microsoft
							developer currently based out of Morgantown, WV. In the spring of
							2011 I graduated with a BS in Mathematics and a BS in Computer
							Science from West Virginia University.
						</div>
						<div className="about__greeting-img" />
					</div>
				</div>
			</div>
		);
	}
}

export default AboutPage;
