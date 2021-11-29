import React from "react";

import {
	Container,
	Grid,
	Box,
	Button,
	IconButton,
	InputAdornment,
	TextField,
} from "@material-ui/core";

import {
	Email as EmailIcon,
	Person as PersonIcon,
	Visibility as VisibilityIcon,
	VisibilityOff as VisibilityOffIcon,
} from "@material-ui/icons";

import { useStyles } from "./styles";

const SignUpForm = ({
	input,
	handleChange,
	handleSubmit,
	handleShowPassword,
	handleShowConfirmPassword,
}) => {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<Box className={classes.textBox}>
				<h1 className={classes.heading}>Sign up</h1>
				<p className={classes.subHeading}>Let’s create your account</p>
			</Box>
			<Box className={classes.formBox}>
				<form onSubmit={handleSubmit}>
					<Grid container>
						<Grid item xs={12} className={classes.marginBottom}>
							<TextField
								InputProps={{
									className: classes.textField,
									disableUnderline: true,
									endAdornment: (
										<InputAdornment position="end">
											<IconButton>
												<PersonIcon />
											</IconButton>
										</InputAdornment>
									),
								}}
								fullWidth
								name="userName"
								onChange={handleChange}
								value={input.userName}
								type="text"
								label="Username"
								variant="filled"
								autoComplete="off"
							/>
						</Grid>
						<Grid item xs={12} className={classes.marginBottom}>
							<TextField
								InputProps={{
									className: classes.textField,
									disableUnderline: true,
									endAdornment: (
										<InputAdornment position="end">
											<IconButton>
												<EmailIcon />
											</IconButton>
										</InputAdornment>
									),
								}}
								fullWidth
								name="email"
								onChange={handleChange}
								value={input.email}
								type="email"
								label="Email"
								variant="filled"
								autoComplete="off"
							/>
						</Grid>
						<Grid container spacing={2}>
							<Grid item sm={12} md={12} lg={6}>
								<TextField
									InputProps={{
										className: classes.textField,
										disableUnderline: true,
										endAdornment: (
											<InputAdornment position="end">
												<IconButton onClick={handleShowPassword}>
													{input.showPassword ? (
														<VisibilityIcon />
													) : (
														<VisibilityOffIcon />
													)}
												</IconButton>
											</InputAdornment>
										),
									}}
									fullWidth
									name="password"
									onChange={handleChange}
									value={input.password}
									type={input.showPassword ? "text" : "password"}
									label="Password"
									variant="filled"
								/>
							</Grid>
							<Grid item sm={12} md={12} lg={6}>
								<TextField
									InputProps={{
										className: classes.textField,
										disableUnderline: true,
										endAdornment: (
											<InputAdornment position="end">
												<IconButton onClick={handleShowConfirmPassword}>
													{input.showConfirmPassword ? (
														<VisibilityIcon />
													) : (
														<VisibilityOffIcon />
													)}
												</IconButton>
											</InputAdornment>
										),
									}}
									fullWidth
									name="confirmPassword"
									onChange={handleChange}
									value={input.confirmPassword}
									type={input.showConfirmPassword ? "text" : "password"}
									label="Confirm Password"
									variant="filled"
								/>
							</Grid>
						</Grid>
					</Grid>
					<Box className={classes.buttonBox}>
						<Button
							className={classes.button}
							fullWidth
							type="submit"
							variant="contained"
							color="primary"
						>
							Sign up
						</Button>
					</Box>
				</form>
			</Box>
		</Container>
	);
};
export default SignUpForm;
