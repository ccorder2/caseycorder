import React from 'react';
import { Fade } from './Transitions';

export class PortfolioPage extends React.Component {
	render() {
		return (
			<div>
				<div className="portfolio__content">
					<div className="portfolio__blurb">
						{this.props.show ? (
							<Fade key="portfolio-title" in appear={true}>
								<div>Play. Learn. Adapt.</div>
							</Fade>
						) : (
							''
						)}
					</div>
					<div className="content-container">
						<div className="portfolio__title">PORTFOLIO</div>
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
								Get your expenses in order. After logging in with a Google
								account, you have the ability to add, edit, and delete expenses.
								The landing page displays a list of expenses that can be
								filtered and sorted on. Clearing the filters allows you to see
								all expenses.
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
