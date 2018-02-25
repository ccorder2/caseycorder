import React from 'react';
import Transition from 'react-transition-group/Transition';

const duration = 500;

const defaultStyle = slideLength => ({
	transition: `all ${duration}ms cubic-bezier(.3,.53,.57,1.25)`,
	marginLeft: slideLength,
	opacity: 0
});

const transitionStyles = slideLength => ({
	entering: { opacity: 0, marginLeft: slideLength },
	entered: { opacity: 1, marginLeft: 0 },
	exiting: { opacity: 1, marginLeft: 0 },
	exited: { opacity: 0, marginLeft: slideLength }
});

const SlideLeft = ({ children, in: inProp, timeout, slideLength }) => (
	<Transition in={inProp} timeout={timeout} appear={true}>
		{state => (
			<div
				style={{
					...defaultStyle(slideLength),
					...transitionStyles(slideLength)[state]
				}}
			>
				{children}
			</div>
		)}
	</Transition>
);

export default SlideLeft;
