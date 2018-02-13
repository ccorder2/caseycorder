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
						<div className="portfolio__item-col">
							<br />
							This section is to help demonstrate the drive I have to improve my
							craft, in addition to exposing some of my personal coding habits.
							One of the bigger issues I've come across when trying to create
							this section is the fact that all codesets I've worked on reside
							on a private server, and all applications are accessed via an
							organization-wide intranet. That being the case, I am unable to
							showcase things I've worked on professionally. So, to try to round
							out this part of my site, I've included a quick rundown of the
							work I do on a day-to-day basis, immediately followed by some
							small projects I've created in my spare time.
						</div>
					</div>
					<div className="content-container">
						<div className="portfolio__item-col">
							<span>
								<h4>Professional Experience</h4>
							</span>
							My daily routine consists of a fair amount of both front-end and
							back-end development. As part of the back-end, I regularly code in
							SQL, PL/SQL, and C#. Many times I've been tasked to help develop
							and design relational database architectures using both SQL and
							Oracle. I regularly implement views, functions, and stored
							procedures, and on occasions, use Entity Framework to generate
							object-relational mapping. As far as my C# experience, it can be
							summarized as the reinforcing business rules through roles, data
							integrity, CRUD operations, and authentication.
							<br />
							<br />
							Originally starting out by learning WebForms, I helped the company
							move towards the MVC architectural pattern for our web
							applications by developing the first solution under our contract
							to use the ASP.NET MVC framework. Since then, many of our existing
							applications have been refactored from WebForms to MVC. To help
							with user experience, we use a third-party set of .NET controls by
							DevExpress alongside of jQuery.
						</div>
					</div>
					<div className="content-container">
						<div className="portfolio__item-col">
							<span>
								<h4>Personal Applications</h4>
							</span>
							My experience and fondness with jQuery led me to dive into the
							world of JavaScript. Recently, I've been taking a stab at learning
							React and sharpening my JavaScript skills. The following three
							applications were created using a combination of Firebase, React,
							Redux, and Webpack. If you would like to visit a working example
							of any of the them, simply press the image. I've only been looking
							into React the past few months, so if you have questions,
							critisms, or input, please feel free to share. Thanks.
							<br />
							<br />
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
									className="link"
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
									className="link"
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
								A staple for many in the agile development lifecycle is planning
								poker. A game/tool used to help find consensus when estimating
								stories to help plan upcoming work.
								<br />
								<a
									className="link"
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
