import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from "./pages/signUp/index";
import Login from "./pages/login/index";
import Categories from "./pages/categories/index";
import AssetLogs from "./pages/assetLogs/index";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<SignUp />
				</Route>

				<Route exact path="/login">
					<Login />
				</Route>

				<Route exact path="/categories">
					<Categories />
				</Route>

				<Route exact path="/assetlogs">
					<AssetLogs />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
