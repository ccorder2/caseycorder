import React from 'react';
import SyntaxHighlighting from './blog_posts/SyntaxHighlighting';

const posts = {
	highlight_js_with_react: <SyntaxHighlighting />
};

export class BlogPost extends React.Component {
	render() {
		return (
			<div className="blog-post">{posts[this.props.match.params.name]}</div>
		);
	}
}

export default BlogPost;
