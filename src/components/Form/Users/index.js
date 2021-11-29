import React from "react";
import { Container, Grid, TextField } from "@material-ui/core";
import { useStyles } from "./styles";

const Users = ({ onChangeNewUser, newUserInputs }) => {
	const classes = useStyles();
	return (
		<Container>
			<form>
				<Grid container className={classes.formGridContainer} spacing={3}>
					<Grid item lg={6}>
						<TextField
							InputProps={{
								className: classes.textField,
							}}
							InputLabelProps={{
								className: classes.inputLabel,
							}}
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
							}}
							InputLabelProps={{
								className: classes.inputLabel,
							}}
							fullWidth
							autoComplete="off"
							color="secondary"
							onChange={onChangeNewUser}
							value={newUserInputs.newUserEmail}
							name="newUserEmail"
							type="email"
							label="Email"
						/>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
};

export default Users;
