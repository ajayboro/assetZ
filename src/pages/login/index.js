import React, { useState } from "react";
import HeroImage from "../../components/HeroImage/index";
import LoginForm from "../../components/Form/Login/index";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import { useStyles } from "./styles";
import { Route, Redirect } from "react-router-dom";

const Login = () => {
	const [userLog, setUserLog] = useState({
		userName: "",
		password: "",
		showPasswordLog: false,
	});

	const [category, setCategory] = useState(true);

	const handleLoginChange = e => {
		const name = e.target.name;
		const value = e.target.value;
		setUserLog({ ...userLog, [name]: value });
	};

	const handleLogin = e => {
		let name = JSON.parse(localStorage.getItem("userName"));
		let pass = JSON.parse(localStorage.getItem("userPassword"));

		if (userLog.userName !== name || userLog.password !== pass) {
			alert("Incorrect Login Details");
		} else {
			setCategory(!category);
		}
	};

	const handleShowPasswordLog = () => {
		setUserLog({ ...userLog, showPasswordLog: !userLog.showPasswordLog });
	};
	const classes = useStyles();
	return (
		<>
			<Route exact path="/login">
				{category ? (
					<Grid container>
						<Grid item sm={12} md={7} lg={7} className={classes.heroImage}>
							<HeroImage />
						</Grid>
						<Grid item sm={12} md={5} lg={5}>
							<Header />
							<LoginForm
								userLog={userLog}
								handleLoginChange={handleLoginChange}
								handleLogin={handleLogin}
								handleShowPasswordLog={handleShowPasswordLog}
							/>
						</Grid>
					</Grid>
				) : (
					<Redirect to="/categories" />
				)}
			</Route>
		</>
	);
};

export default Login;
