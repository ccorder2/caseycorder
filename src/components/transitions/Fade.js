import React from 'react';
import Transition from 'react-transition-group/Transition';

const duration = 750;

const defaultStyle = {
	transition: `opacity ${duration}ms ease-in`,
	opacity: 0
};

const transitionStyles = {
	entering: { opacity: 0 },
	entered: { opacity: 1 },
	exiting: { opacity: 1 },
	exited: { opacity: 0 }
};

const Fade = ({ children, in: inProp, timeout }) => (
	<Transition in={inProp} timeout={timeout} appear={true}>
		{state => (
			<div
				style={{
					...defaultStyle,
					...transitionStyles[state]
				}}
			>
				{children}
			</div>
		)}
	</Transition>
);

export default Fade;
