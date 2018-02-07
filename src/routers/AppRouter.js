import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AboutPage from '../components/AboutPage';
import BlogPage from '../components/BlogPage';
import ContactPage from '../components/ContactPage';
import HomePage from '../components/HomePage';
import MainLayout from '../components/MainLayout';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioPage from '../components/PortfolioPage';

export const history = createHistory();

export const hashLinkScroll = () => {
	const { hash } = window.location;
	if (hash !== '') {
		setTimeout(() => {
			const id = hash.replace('#', '');
			const element = document.getElementById(id);
			if (element) element.scrollIntoView();
		}, 0);
	}
};

history.listen(location => {
	hashLinkScroll();
});

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={withLayout(HomePage)} exact={true} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

const withLayout = Component => {
	return () => (
		<MainLayout>
			<Component />
		</MainLayout>
	);
};

export default AppRouter;
