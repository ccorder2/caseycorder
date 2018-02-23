import React from 'react';
import { Link } from 'react-router-dom';

export class BlogPage extends React.Component {
	render() {
		return (
			<div className="blog">
				<div className="content-container">
					<div className="blog__title">BLOG</div>
					<div className="blog__content">
						<div className="blog__item">
							<div className="blog__item-title">
								<Link to="blog/highlight_js_with_react" className="link">
									Syntax Highlighting in React with Prism
								</Link>
							</div>
							<div>
								Add syntax highlighting to HTML code elements inside of React
								applications. Select from a few different css themes to
								highlight many of the most common programming languages.
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BlogPage;
