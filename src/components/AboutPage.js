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
							Science from West Virginia University. I've worked as an intern
							for ANSYS and KeyLogic Systems. After graduating, my internship at
							KeyLogic turned into a fulltime position. I've continued as a
							developer only leaving the company briefly to travel. During my
							travels, they allowed me to work remotely, and after returning, I
							was hired back on.
							<br />Resume:{' '}
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
