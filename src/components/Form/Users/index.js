import React from "react";
import { Container, Grid, TextField } from "@material-ui/core";
import { useStyles } from "./styles";

const Users = ({ onChangeNewUser, newUserInputs }) => {
	const classes = useStyles();
	return (
		<Container>
			<form>
				<Grid
					container
					style={{
						maxWidth: 550,
						marginTop: 20,
						marginLeft: 30,
					}}
					spacing={3}
				>
					<Grid item lg={6}>
						<TextField
							InputProps={{
								className: classes.textField,
							}}
							fullWidth
							onChange={onChangeNewUser}
							value={newUserInputs.newUserName}
							name="newUserName"
							type="text"
							label="Username"
						/>
					</Grid>
					<Grid item lg={6}>
						<TextField
							InputProps={{
								className: classes.textField,
							}}
							fullWidth
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
