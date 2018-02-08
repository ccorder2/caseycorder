import React from 'react';
import { CSSTransition } from 'react-transition-group';

// props enter, exit, appear, timeout

export const Fade = ({ children, ...props }) => (
	<CSSTransition {...props} timeout={1000} classNames="fade">
		{children}
	</CSSTransition>
);
