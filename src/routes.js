import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUpLogin from "./pages/signUpLogin/index";
import Categories from "./pages/categories/index";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<SignUpLogin />
				</Route>

				<Route exact path="/categories">
					<Categories />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
