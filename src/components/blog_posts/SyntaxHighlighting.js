import React from 'react';
import Prism from 'prismjs';
import PrismBash from 'prismjs/components/prism-bash.min';
import PrismJSX from 'prismjs/components/prism-jsx.min';

const funcStr = `<pre><code className="language-markup"> ... </code></pre>
<pre><code className="language-javascript"> ... </code></pre>
<pre><code className="language-jsx"> ... </code></pre>`;

const mountFuncStr = `componentDidMount() {
    Prism.highlightAll();
}`;

export class SyntaxHighlighting extends React.Component {
	componentDidMount() {
		Prism.highlightAll();
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div className="blog-post__main">
				<div className="content-container">
					<div className="blog-post__title">
						<strong>Syntax Highlighting in React with Prism</strong>
						<br />
						<span className="blog-post__date">Posted on February 22nd, 2018</span>
					</div>
					<div className="blog-post__content">
						A staple in most blog posts about programming is the code snippet. To make these
						snippets more readable we oftentimes want to style the code to resemble what we may see
						in a development environment. Development environments normally implement syntax
						highlighting to make it easier to develop.
						<br />
						<br />
						This being my first blog post, I thought what better way to start off but by
						implementing syntax highlighting for code elements for my blog. Since this will often be
						used in my posts, I decided to do research on some more commonly used syntax
						highlighting tools for websites. The two I extensively looked into were{' '}
						<a href="https://highlightjs.org/" className="link" target="_blank">
							highlight.js
						</a>{' '}
						and{' '}
						<a href="http://prismjs.com/" className="link" target="_blank">
							Prism
						</a>. My entire website was created using React, and thus, the code snippets I share
						will reflect my implementation by using ES6 with JSX.
						<br />
						<br />
						I first implemented and tested highlight.js without many issues. I did notice it was a
						very big package, but after reading through some posts about it, I was able to shrink
						the size by only importing the languages I wanted to use. I was pretty happy with the
						outcome, and was impressed by the number of different styles that could be used to
						resemble development environment themes. Another positive was the number of languages it
						supported syntax highlighting for. It took until I started trying to figure out how to
						style my JSX code before I realized it wasn’t currently supported. After reading through
						some GitHub issue logs, I found many who needed support for JSX were switching from
						highlight.js to Prism.
						<br />
						<br />
						Prism was just as easy, if not easier, to implement. I did notice it supported over 130
						different languages and found the only drawback to be the small number of css themes for
						styling your code elements. This not being a high priority I decided to go with it.
						Below are the steps I took to add syntax highlighting to my website.
						<br />
						<br />
						<hr />
						<br />
						I first installed the package into my React application:
						<br />
						<br />
						<pre>
							<code className="language-bash">npm install prismjs</code>
						</pre>
						-or-
						<pre>
							<code className="language-bash">yarn add prismjs</code>
						</pre>
						<br />
						<hr />
						<br />
						To make the package available to the component that housed my code snippets, I imported
						the default export from the prismjs package.
						<br />
						<br />
						<pre>
							<code className="language-javascript">import Prism from 'prismjs';</code>
						</pre>
						<br />
						<hr />
						<br />
						You will then need to import the css class for the theme you wish you use. To get a full
						list, you can go into ./node_modules/prismjs/themes to see a full list of included
						styles. You can then import the desired css class into your component, or in your app.js
						file.
						<br />
						<br />
						<pre>
							<code className="language-jsx">import 'prismjs/themes/prism-okaidia.css';</code>
						</pre>
						<br />
						<hr />
						<br />
						In the documentation, Prism then only requires you to add a class to the code elements
						in your HTML markup. Per the Prism website, the class name follows a simple syntax:
						language-xxxx; where ‘xxxx’ is replaced with the language you wish to style. Follow the{' '}
						<a href="http://prismjs.com/index.html#languages-list" className="link" target="_blank">
							link
						</a>{' '}
						to see a list of supported languages.
						<br />
						<br />
						<pre>
							<code className="language-markup">{funcStr}</code>
						</pre>
						<br />
						<hr />
						<br />
						After implementing the code above, I noticed one glaring issue, the JSX code did not
						have any highlighting. After some painstaking reading through the Prism GitHub issue
						logs, I found the solution. When wanting to style any languages that aren’t part of
						Prism’s main four (Markup, CSS, C-like, and JavaScript) you have to import the specific
						language you wish you use.
						<br />
						<br />
						<pre>
							<code className="language-jsx">
								import PrismBash from 'prismjs/components/prism-bash.min';{'\n'}
								import PrismJSX from 'prismjs/components/prism-jsx.min';
							</code>
						</pre>
						<br />
						I was able to also observe this interaction in the ‘Test Drive’ portion of their website
						(which can be accessed via the footer). If you open up the developer tools in your
						browser and start selecting different languages, you will notice a script tag being
						inserted at the bottom of the page importing the language you’ve selected. This only
						happens if the language selected is not one of their main four.
						<br />
						<br />
						<hr />
						<br />
						After some more testing I noticed the syntax highlighting wasn't working when first
						visiting my blog. To remedy this I used the api to force the highlight when the
						component mounts.
						<br />
						<br />
						<pre>
							<code className="language-jsx">{mountFuncStr}</code>
						</pre>
						<br />
						<hr />
						<br />
						And that’s it… pretty simple. I can now easily add code snippets with syntax
						highlighting to my blog.
						<br />
						<br />
						<br />
					</div>
				</div>
			</div>
		);
	}
}

export default SyntaxHighlighting;
