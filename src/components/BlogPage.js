import React from 'react';
import { Link } from 'react-router-dom';
import SlideLeft from './transitions/SlideLeft';
import SlideRight from './transitions/SlideRight';

export class BlogPage extends React.Component {
	render() {
		return (
			<div className="blog">
				<div className="blog__img">
					<div className="blog__img-filter">
						<div className="content-container">
							<div id="blogTitle" className="blog__title-container">
								<SlideLeft
									key="blog__title"
									in={this.props.showTitle}
									appear={true}
									timeout={0}
									slideLength={800}
								>
									<div className="blog__title">BLOG</div>
								</SlideLeft>
								<SlideRight
									key="blog__title-underline"
									in={this.props.showTitle}
									appear={true}
									timeout={0}
									slideLength={800}
								>
									<div className="blog__title-underline" />
								</SlideRight>
							</div>
						</div>
					</div>
				</div>
				<div className="content-container">
					<div className="blog__content">
						<div className="blog__item">
							<div className="blog__item-title">
								<Link to="blog/highlight_js_with_react" className="link">
									Syntax Highlighting in React with Prism
								</Link>
								<br />
								<div>
									<em>February 22nd, 2018</em>
								</div>
							</div>
							<div className="blog__item-content">
								Add syntax highlighting to HTML code elements inside of React applications. Select
								from a few different css themes to highlight many of the most common programming
								languages.
							</div>
						</div>
						<br />
						<div className="blog__item">
							<div className="blog__item-title">
								<Link to="blog/pixijs_bouncing_ball" className="link">
									Getting Started with PixiJS v4
								</Link>
								<br />
								<div>
									<em>March 3rd, 2018</em>
								</div>
							</div>
							<div className="blog__item-content">
								My Hello World for PixiJS. This is a rundown of my first attempt at creating a small
								PixiJS program. In this example, I create a ball that bounces back and forth across
								the screen.
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BlogPage;
