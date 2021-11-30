import React from "react";
import { Container, Grid, TextField } from "@material-ui/core";
import { useStyles } from "./styles";

const Users = ({ onChangeNewUser, newUserInputs }) => {
	const classes = useStyles();
	return (
		<Container>
			<form>
				<Grid container spacing={3} className={classes.formGridContainer}>
					<Grid item lg={6}>
						<TextField
							InputProps={{
								className: classes.textField,
								disableUnderline: true,
							}}
							InputLabelProps={{
								className: classes.inputLabel,
							}}
							className={classes.underline}
							fullWidth
							color="secondary"
							onChange={onChangeNewUser}
							value={newUserInputs.newUserName}
							name="newUserName"
							type="text"
							label="Username"
							autoComplete="off"
						/>
					</Grid>
					<Grid item lg={6}>
						<TextField
							InputProps={{
								className: classes.textField,
								disableUnderline: true,
							}}
							InputLabelProps={{
								className: classes.inputLabel,
							}}
							className={classes.underline}
							fullWidth
							color="secondary"
							onChange={onChangeNewUser}
							value={newUserInputs.newUserEmail}
							name="newUserEmail"
							type="email"
							label="Email"
							autoComplete="off"
						/>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
};

export default Users;
