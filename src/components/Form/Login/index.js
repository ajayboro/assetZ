import React from "react";

import {
	Container,
	Grid,
	Box,
	TextField,
	Button,
	IconButton,
	InputAdornment,
} from "@material-ui/core";

import {
	Person as PersonIcon,
	Visibility as VisibilityIcon,
	VisibilityOff as VisibilityOffIcon,
} from "@material-ui/icons";

import { useStyles } from "./styles";

const LoginForm = ({
	userLog,
	handleLoginChange,
	handleLogin,
	handleShowPasswordLog,
}) => {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<Box className={classes.textBox}>
				<h1 className={classes.heading}>Login</h1>
				<p className={classes.subHeading}>Login to your account</p>
			</Box>
			<Box className={classes.formBox}>
				<form onSubmit={handleLogin}>
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
								onChange={handleLoginChange}
								value={userLog.userName}
								type="text"
								label="Username"
								variant="filled"
							/>
						</Grid>
						<Grid item xs={12} className={classes.marginBottom}>
							<TextField
								InputProps={{
									className: classes.textField,
									disableUnderline: true,
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={handleShowPasswordLog}>
												{userLog.showPasswordLog ? (
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
								onChange={handleLoginChange}
								value={userLog.password}
								type={userLog.showPasswordLog ? "text" : "password"}
								label="Password"
								variant="filled"
							/>
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
							Login
						</Button>
					</Box>
				</form>
			</Box>
		</Container>
	);
};
export default LoginForm;
