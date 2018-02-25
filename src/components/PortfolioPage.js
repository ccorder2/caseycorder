import React from 'react';
import Fade from './transitions/Fade';
import SlideLeft from './transitions/SlideLeft';
import SlideRight from './transitions/SlideRight';

export class PortfolioPage extends React.Component {
	render() {
		return (
			<div className="portfolio">
				<div className="portfolio__content">
					<div id="portfolioBlurb" className="portfolio__blurb">
						<Fade key="portfolio__blurb-play" in={this.props.showBlurb} appear={true} timeout={0}>
							<div>Play.&nbsp;</div>
						</Fade>
						<Fade
							key="portfolio__blurb-learn"
							in={this.props.showBlurb}
							appear={true}
							timeout={500}
						>
							<div>Learn.&nbsp;</div>
						</Fade>
						<Fade
							key="portfolio__blurb-adapt"
							in={this.props.showBlurb}
							appear={true}
							timeout={1000}
						>
							<div>Adapt.</div>
						</Fade>
					</div>
					<div className="content-container">
						<div id="portfolioTitle" className="portfolio__title-container">
							<SlideLeft
								key="portfolio__title"
								in={this.props.showTitle}
								appear={true}
								timeout={0}
								slideLength={800}
							>
								<div className="portfolio__title">PORTFOLIO</div>
							</SlideLeft>
							<SlideRight
								key="portfolio__title-underline"
								in={this.props.showTitle}
								appear={true}
								timeout={0}
								slideLength={800}
							>
								<div className="portfolio__title-underline" />
							</SlideRight>
						</div>
					</div>
					<div className="content-container">
						<div className="portfolio__item-col">
							<br />
							<em>
								Below are two separate sections. The first is an outline of my professional work
								experience. And the second, a list of personal projects to assist with highlighting
								a few programming habits.
							</em>
						</div>
					</div>
					<div className="content-container">
						<div className="portfolio__item-col">
							<span>
								<h4>Professional Experience</h4>
							</span>
							Originally starting as a summer intern at ANSYS, I ran and maintained test scripts for
							their legacy software. All scripts were written in IronPython and ran on a daily
							basis. All issues I found were elevated to other developers to see whether the script
							needed to be updated, or an error was introduced into the software.
							<br />
							<br />
							During my senior year of college, I began my work at KeyLogic. Early in my tenure I
							taught myself ASP.NET Web Forms and was quickly included on a project to help manage
							financial data for the Department of Energy’s National Energy Technology Laboratory. I
							participated in requirements gathering as well as design meetings with the customer.
							Once comfortable with the back-end workflow, I moved from a majority front-end role to
							a position where I developed in all parts of the stack. Aside from HTML and CSS, I
							used Web Form and DevExpress (3rd party library) controls, C#, SQL, and an
							object-relational mapping tool called EntitySpaces. I was included in helping design
							and construct the database by using SQL to write and modify tables, stored procedures,
							functions, and views. My C# experience can be summarized by the reinforcing of
							business rules through user roles, data integrity, CRUD operations, and
							authentication.
							<br />
							<br />
							After establishing my work ethic and abilities within the company, I was put on my
							first solo project. The project was to design and implement a curriculum management
							system for National Aeronautics and Space Administration’s SMA Technical Excellence
							Program. This application was completed quickly and on a small budget.
							<br />
							<br />
							Shortly after finishing my solo project, I convinced the lead developer on the DOE
							NETL contract to allow me to start our next project using the ASP.NET MVC framework.
							To provide some value to the company, I took it onto myself to learn as much as I
							could, occasionally holding demos and mentoring other developers. The new framework
							resonated well because of its structure and the shift to AJAX. The push for our
							development to use MVC was well-received and changed the way we developed all new
							applications going forward. We have since refactored old code to use MVC instead of
							Web Forms.
							<br />
							<br />
							Most recently, I was the lead developer on a project where I was tasked to replace our
							old ORM with Entity Framework by implementing it in a new project. During this project
							I also became very familiar with PL/SQL since it was requested we use an Oracle
							database. The success of this application has led to other projects on the contract to
							start using Entity Framework.
						</div>
					</div>
					<div className="content-container">
						<div className="portfolio__item-col">
							<span>
								<h4>Personal Applications</h4>
							</span>
							My enthusiasm for jQuery led me to further develop my skills with JavaScript. The
							following three applications highlight my experience with Firebase, React, Redux, and
							Webpack. If you would like to visit a working example of any of them, simply press the
							image.
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
								A “to-do” style list that allows the user to create items or remove them. If the
								user is undecided on what to do, the application has a button, that when pressed,
								will popup a random item in the list.
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
								Get your expenses in order. After logging in with a Google account, you have the
								ability to add, edit, and delete expenses.
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
							<a href="http://apps.planningpoker.caseycorder.com" target="_blank">
								<img src="/images/planningpoker.jpg" alt="planningpoker" />
							</a>
							<div className="portfolio__item-content">
								<span>
									<strong>Planning Poker:</strong>
								</span>{' '}
								A staple for many in the agile development lifecycle is planning poker. This
								game/tool can be used to help find consensus by estimating stories when planning
								upcoming work.
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
