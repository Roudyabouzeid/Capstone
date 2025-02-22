import React, { useState, useCallback } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';

import HomePage from './homepage/pages/HomePage';
import UserFeatures from './features/pages/UserFeatures';
import ParkingPlaces from './parking/pages/ParkingPlaces';
import CrashPlaces from './crash/pages/CrashPlaces';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/Navigation/MainNavigation';
import { AuthContext } from './context/auth-context';
import PotholesPlaces from './potholes/pages/PotholesPlaces';
import DistractionFeature from './distraction/pages/DistractionFeature';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = useCallback(() => {
		setIsLoggedIn(true);
	}, []);

	const logout = useCallback(() => {
		setIsLoggedIn(false);
	}, []);

	let routes;

	if (isLoggedIn) {
		routes = (
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/features" exact>
					<UserFeatures />
				</Route>
				<Route path="/parking" exact>
					<ParkingPlaces />
				</Route>
				<Route path="/potholes" exact>
					<PotholesPlaces />
				</Route>
				<Route path="/crash" exact>
					<CrashPlaces />
				</Route>
				<Route path="/distraction" exact>
					<DistractionFeature />
				</Route>
				<Redirect to="/features" />
			</Switch>
		);
	} else {
		routes = (
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/auth">
					<Auth />
				</Route>
				<Redirect to="/auth" />
			</Switch>
		);
	}

	return (
		<AuthContext.Provider
			value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
		>
			<Router>
				<MainNavigation />
				<main>{routes}</main>
			</Router>
		</AuthContext.Provider>
	);
};

export default App;
