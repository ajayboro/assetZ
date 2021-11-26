import React, { useState } from "react";
import HeroImage from "../../components/HeroImage/index";
import SignUpForm from "../../components/Form/SignUp/index";
import Header from "../../components/Header";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { Route, Redirect } from "react-router-dom";

const SignUp = () => {
	const [input, setInput] = useState({
		userName: "",
		email: "",
		password: "",
		confirmPassword: "",
		showPassword: false,
		showConfirmPassword: false,
	});

	const [login, setLogin] = useState(true);

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
		} else {
			localStorage.setItem("userName", JSON.stringify(input.userName));
			localStorage.setItem("userPassword", JSON.stringify(input.password));
			setLogin(!login);
		}
	};

	const classes = useStyles();

	return (
		<>
			<Route exact path="/">
				{login ? (
					<Grid container>
						<Grid item sm={12} md={7} lg={7} className={classes.heroImage}>
							<HeroImage />
						</Grid>
						<Grid item sm={12} md={5} lg={5}>
							<Header />
							<SignUpForm
								input={input}
								handleChange={handleChange}
								handleSubmit={handleSubmit}
								handleShowPassword={handleShowPassword}
								handleShowConfirmPassword={handleShowConfirmPassword}
							/>
						</Grid>
					</Grid>
				) : (
					<Redirect to="/login" />
				)}
			</Route>
		</>
	);
};

export default SignUp;
