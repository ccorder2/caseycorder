import React from 'react';

export class AboutPage extends React.Component {
	render() {
		return (
			<div className="about">
				<div className="content-container">
					<div className="about__title">ABOUT</div>
					<div className="about__greeting-content">
						<div className="about__greeting">
							<span>Greetings</span>, I'm Casey Corder--full stack Microsoft
							developer currently based out of Morgantown, WV. In the spring of
							2011 I graduated with a BS in Mathematics and a BS in Computer
							Science from West Virginia University.<br />Resume:{' '}
							<a
								className="link"
								href="/content/SDE_Resume.docx"
								target="_blank"
							>
								word
							</a>{' '}
							|{' '}
							<a
								className="link"
								href="/content/SDE_Resume.pdf"
								target="_blank"
							>
								pdf
							</a>
						</div>
						<div className="about__greeting-img" />
					</div>
				</div>
			</div>
		);
	}
}

export default AboutPage;
