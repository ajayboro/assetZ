import React, { useState } from "react";
import HeroImage from "../../components/HeroImage/index";
import SignUpForm from "../../components/SignUp/index";
import LoginForm from "../../components/Login/index";
import Header from "../../components/Header";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { Redirect } from "react-router-dom";

const SignUpLogin = () => {
	const [input, setInput] = useState({
		userName: "",
		email: "",
		password: "",
		confirmPassword: "",
		showPassword: false,
		showConfirmPassword: false,
	});
	const [userLog, setUserLog] = useState({
		userName: "",
		password: "",
		showPasswordLog: false,
	});

	const [login, setLogin] = useState(true);
	const [category, setCategory] = useState(true);

	const handleChange = e => {
		const { name, value } = e.target;
		setInput({ ...input, [name]: value });
	};

	const handleShowPassword = () => {
		setInput({ ...input, showPassword: !input.showPassword });
	};

	const handleShowConfirmPassword = () => {
		setInput({ ...input, showConfirmPassword: !input.showConfirmPassword });
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (
			!input.userName ||
			!input.email ||
			!input.password ||
			!input.confirmPassword
		) {
			alert("All Fields are Required");
		} else if (input.password !== input.confirmPassword) {
			alert("Password is not matching!");
		} else {
			localStorage.setItem("userName", JSON.stringify(input.userName));
			localStorage.setItem("userPassword", JSON.stringify(input.password));
			setLogin(!login);
		}
	};

	const handleLoginChange = e => {
		const { name, value } = e.target;
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
			<Grid container>
				<Grid item sm={12} md={7} lg={7} className={classes.heroImage}>
					<HeroImage />
				</Grid>
				<Grid item sm={12} md={5} lg={5}>
					<Header />
					{login ? (
						<SignUpForm
							input={input}
							handleChange={handleChange}
							handleSubmit={handleSubmit}
							handleShowPassword={handleShowPassword}
							handleShowConfirmPassword={handleShowConfirmPassword}
						/>
					) : (
						<>
							{category ? (
								<LoginForm
									userLog={userLog}
									handleLoginChange={handleLoginChange}
									handleLogin={handleLogin}
									handleShowPasswordLog={handleShowPasswordLog}
								/>
							) : (
								<Redirect to="/categories" />
							)}
						</>
					)}
				</Grid>
			</Grid>
		</>
	);
};

export default SignUpLogin;
