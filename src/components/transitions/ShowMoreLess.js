import React from 'react';
import Transition from 'react-transition-group/Transition';
import { getElementHeight } from '../../helpers/scroll';

const duration = 300;

const defaultStyle = (isResize, slideLength) => ({
	transition: isResize ? 'unset' : `all ${duration}ms linear`,
	marginTop: -slideLength,
	visibility: 'hidden'
});

const transitionStyles = slideLength => ({
	entering: { marginTop: -slideLength, visibility: 'hidden' },
	entered: { marginTop: 0, visibility: 'visible' },
	exiting: { marginTop: 0, visibility: 'visible' },
	exited: { marginTop: -slideLength, visibility: 'hidden' }
});

export class ShowMoreLess extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slideLength: 0,
			resize: true
		};
	}
	componentDidMount() {
		window.addEventListener('resize', this.onResize);
		this.setState((prevState, props) => ({ slideLength: getElementHeight(this.props.elemId) }));
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize);
	}
	onResize = () => {
		this.setState((prevState, props) => ({
			resize: true,
			slideLength: getElementHeight(props.elemId)
		}));
	};
	onEnterExit = () => {
		if (this.state.resize) this.setState(() => ({ resize: false }));
	};
	render() {
		return (
			<Transition
				in={this.props.in}
				timeout={0}
				onEnter={this.onEnterExit}
				onExit={this.onEnterExit}
			>
				{state => (
					<div
						id={this.props.elemId}
						style={{
							...defaultStyle(this.state.resize, this.state.slideLength),
							...transitionStyles(this.state.slideLength)[state]
						}}
					>
						{this.props.children}
					</div>
				)}
			</Transition>
		);
	}
}

export default ShowMoreLess;
