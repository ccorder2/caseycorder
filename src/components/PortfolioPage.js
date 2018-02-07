import React from 'react';

export class PortfolioPage extends React.Component {
	render() {
		return (
			<div>
				<div className="portfolio__content">
					<div className="portfolio__blurb">
						<div className={this.props.show ? 'show' : ''}>
							Play. Learn. Adapt.
						</div>
					</div>
					<div className="content-container">
						<div className="portfolio__item">
							Unfortunately, I am unable to showcase any of the solftware
							solutions I've worked on. This section is more to demo small
							projects I've created in my spare time. These past couple of
							months, I've started learning Firebase, React, Redux, and Webpack.
							Thus, the following three apps were made using those technologies.
							I'm always open to questions, criticisms, and input. So if you
							have any, please share.
						</div>
					</div>
					<hr />
					<div className="content-container">
						<div className="portfolio__item">
							<a href="http://apps.indecision.caseycorder.com" target="_blank">
								<img src="/images/indecision.jpg" alt="indecision" />
							</a>
							<div className="portfolio__item-content">
								<span>
									<strong>Indecision:</strong>
								</span>
								{'  '}
								A small todo-style list that allows the user to create items or
								remove them. If the user is undecided on what to do, the
								application has a button, that when pressed, will popup a random
								item in the list.
								<br />
								<a
									href="https://github.com/ccorder2/indecision-app"
									target="_blank"
								>
									github.com/ccorder2/indecision-app
								</a>
							</div>
						</div>
					</div>
					<hr />
					<div className="content-container">
						<div className="portfolio__item">
							<a href="http://apps.expensify.caseycorder.com" target="_blank">
								<img src="/images/expensify.jpg" alt="expensify" />
							</a>
							<div className="portfolio__item-content">
								<span>
									<strong>Expensify:</strong>
								</span>
								{'  '}
								Get your expenses in order.
								<br />
								<a
									href="https://github.com/ccorder2/expensify-app"
									target="_blank"
								>
									github.com/ccorder2/expensify-app
								</a>
							</div>
						</div>
					</div>
					<hr />
					<div className="content-container">
						<div className="portfolio__item">
							<a
								href="http://apps.planningpoker.caseycorder.com"
								target="_blank"
							>
								<img src="/images/planningpoker.jpg" alt="planningpoker" />
							</a>
							<div className="portfolio__item-content">
								<span>
									<strong>Planning Poker:</strong>
								</span>{' '}
								A tool used to estimate stories for agile/scrum software
								development.
								<br />
								<a
									href="https://github.com/ccorder2/planning-poker"
									target="_blank"
								>
									github.com/ccorder2/planning-poker
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PortfolioPage;
