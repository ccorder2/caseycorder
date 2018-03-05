import React from 'react';
import Prism from 'prismjs';
import PrismBash from 'prismjs/components/prism-bash.min';

const varsStr = `const appWidth = 600;
const appHeight = 200;
const ballSize = 32;`;

const appStr = `const app = new PIXI.Application({
    backgroundColor: 0xe3e3e3,
    height: appHeight,
    width: appWidth
});
document.body.appendChild(app.view);`;

const ballStr = `let circle = new PIXI.Graphics();
circle.beginFill(0xFF3333);
circle.drawCircle(0, 0, ballSize);
circle.endFill();
circle.x = ballSize;
circle.y = appHeight - ballSize;
app.stage.addChild(circle);`;

const ballVelStr = `circle.dx = 2;
circle.dy = -10;`;

const gameLoopStr = `function gameLoop(delta){
    if(circle.x >= appWidth - ballSize || circle.x < ballSize)
        circle.dx *= -1;
    if(circle.y >= appHeight - ballSize)
        circle.dy = -10;

    circle.x += circle.dx;
    circle.dy += .5;
    circle.y += circle.dy
}`;

export class PixiBouncingBall extends React.Component {
	componentDidMount() {
		Prism.highlightAll();
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div className="blog-post__main">
				<div className="content-container">
					<div className="blog-post__title">
						<strong>Getting Started with PixiJS v4</strong>
						<br />
						<span className="blog-post__date">Posted on March 3rd, 2018</span>
					</div>
					<div className="blog-post__content">
						I have always been interested in game design, graphics, and physics. So in this blog I
						wanted to tackle creating a small program using a popular 2D WebGL renderer called{' '}
						<a href="http://www.pixijs.com/" className="link" target="_blank">
							PixiJS
						</a>. I was pointed to Pixi after a couple of friends mentioned it. There are numerous,
						more robust, libraries that use Pixi as their main renderer which I hope to dive further
						into in future blog posts. My 'Hello World' example of Pixi is that of a red bouncing
						ball on an empty stage.
						<br />
						<br />
						<hr />
						<br />
						First things first, we will need to reference or install the PixiJS library:
						<br />
						<br />
						<pre>
							<code className="language-markup">
								{
									'<script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.5.1/pixi.min.js"></script>'
								}
							</code>
						</pre>
						-or-
						<pre>
							<code className="language-bash">npm install pixi.js</code>
						</pre>
						-or-
						<pre>
							<code className="language-bash">yarn add pixi.js</code>
						</pre>
						<br />
						If you are not using the CDN install, you will also need to import the library.
						<br />
						<br />
						<pre>
							<code className="language-javascript">import Pixi from 'pixi.js';</code>
						</pre>
						<br />
						<hr />
						<br />
						I then created some variables to help control the ball by setting the stage dimensions
						and the size of the ball.
						<br />
						<br />
						<pre>
							<code className="language-javascript">{varsStr}</code>
						</pre>
						<br />
						<hr />
						<br />
						We will now need to actually create the Pixi application and add it to the DOM. You will
						notice that the{' '}
						<a
							href="http://pixijs.download/release/docs/PIXI.Application.html"
							className="link"
							target="_blank"
						>
							Application
						</a>{' '}
						object takes on arguments to initialize it. The documentation gives a list of variables
						that can be set. You can specify them as individual arguments or pass in an object with
						the list of variables you wish to set. I personally decided to go the object route to
						make things easier to see and understand.
						<br />
						<br />
						<pre>
							<code className="language-javascript">{appStr}</code>
						</pre>
						<br />
						<hr />
						<br />
						You should now be able to see the stage rendered to the screen. Next, we will want to
						display the ball/circle on the screen. This is where I got a little caught up. The best
						way I found was to implement the{' '}
						<a
							href="http://pixijs.download/release/docs/PIXI.Graphics.html"
							className="link"
							target="_blank"
						>
							Graphics
						</a>{' '}
						object and use one of the many methods to create the desired shape. You will then need
						to fill the object with a color to make it visible and add it to the stage.
						<br />
						<br />
						<pre>
							<code className="language-javascript">{ballStr}</code>
						</pre>
						<br />
						<hr />
						<br />
						The ball will now be rendered on the screen in the bottom left corner. We will now have
						to give it some movement by applying a velocity in both horizontal and vertical
						directions. To do this I added a new variable to the object to keep track of the objects
						motion.
						<br />
						<br />
						<pre>
							<code className="language-javascript">{ballVelStr}</code>
						</pre>
						<br />
						<hr />
						<br />
						The final couple steps deal with adding a game loop using the application's internal
						ticker. First we will add the ticker with a callback function that passes the delta (the
						change in the clock tick) to the game loop. It appears delta always returns a 1 as the
						ticks increment. I assume there is a way to change the size of the delta, but I have no
						looked into it yet.
						<br />
						<br />
						<pre>
							<code className="language-javascript">{`app.ticker.add(delta => gameLoop(delta));`}</code>
						</pre>
						<br />
						We now will need to create a game loop to move the ball across the screen. I first
						thought of the cases where I do not wish the ball to go out of the screen. So I added
						checks to make sure the ball never goes outside of the stage on the left, ride, and
						bottom sides. I did not need to check the top because I planned to add a downward
						acceleration.
						<br />
						<br />
						The first check is on the horizontal axis. If the ball's x variable ever crosses either
						the left or ride size, I simply flip its velocity. The second check looks at the
						position of the ball to see if its y variable is below the screen. If it is, I set its
						velocity back to what it was initially. After the checks, I update the ball's
						coordinates using it's previous coordinate plus the velocity. For the y variable, I also
						apply a decay to the velocity to simulate gravity.
						<br />
						<br />
						<pre>
							<code className="language-javascript">{gameLoopStr}</code>
						</pre>
						<br />
						<hr />
						<br />
						The ball will now be bouncing back and forth across the screen. Visit a working example{' '}
						<a href="https://codepen.io/ccorder2/pen/NyvygQ" className="link" target="_blank">
							here
						</a>{' '}
						on codepen. That ends this post on my first PixiJS application. The hope is to continue
						creating examples like this using PixiJS as well as other WebGL libraries like Phaser.
						<br />
						<br />
						<br />
					</div>
				</div>
			</div>
		);
	}
}

export default PixiBouncingBall;
