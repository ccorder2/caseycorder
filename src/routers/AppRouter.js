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

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={withLayout(HomePage)} exact={true} />
				<Route path="/about" component={withLayout(AboutPage)} />
				<Route path="/portfolio" component={withLayout(PortfolioPage)} />
				<Route path="/blog" component={withLayout(BlogPage)} />
				<Route path="/contact" component={withLayout(ContactPage)} />
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
