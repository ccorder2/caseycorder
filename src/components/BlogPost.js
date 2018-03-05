import React from 'react';
import SyntaxHighlighting from './blog_posts/SyntaxHighlighting';
import PixiBouncingBall from './blog_posts/PixiBouncingBall';

const posts = {
	highlight_js_with_react: <SyntaxHighlighting />,
	pixijs_bouncing_ball: <PixiBouncingBall />
};

export class BlogPost extends React.Component {
	render() {
		return (
			<div className="blog-post">
				{posts[this.props.match.params.name]}
				{console.log(posts[this.props.match.params.name])}
			</div>
		);
	}
}

export default BlogPost;
