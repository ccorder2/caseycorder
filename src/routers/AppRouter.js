import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { hashLinkScroll } from '../helpers/scroll';
import BlogPost from '../components/BlogPost';
import HomePage from '../components/HomePage';
import MainLayout from '../components/MainLayout';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

history.listen(location => {
	hashLinkScroll();
});

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={withLayout(HomePage)} exact={true} />
				<Route path="/blog/:name" component={withLayout(BlogPost)} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

const withLayout = Component => {
	return ({ ...props }) => (
		<MainLayout>
			<Component {...props} />
		</MainLayout>
	);
};

export default AppRouter;
