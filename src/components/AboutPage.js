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
							2011 I graduated with two B.S. degrees, one in Mathematics and the
							other in Computer Science. In addition to my degree work, I
							interned for ANSYS and KeyLogic Systems. My positive impact on
							KeyLogic was recognized and my internship transitioned into a full
							time position after graduation. I’ve continued as a developer
							working on many web applications, only leaving the company briefly
							to move to Seattle and travel. Shortly after departing, I was
							contacted and asked to continue working part time remotely on
							previous projects. I lived in Seattle for a couple years before
							returning to West Virginia, where I was quickly hired back as a
							full time software developer. I’m a highly motivated and astute
							individual with over seven years of software development
							experience, ready to take on any challenge.
							<br />
							<br />
							<strong>Resume:</strong>{' '}
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
