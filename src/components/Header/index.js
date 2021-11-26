import React from "react";
import Logo from "../Logo/index";
import AIcon from "../../assets/icons/a.svg";
import { Grid, Box } from "@material-ui/core";
import { useStyles } from "./styles";

const Header = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.container}>
			<Grid item xs={10} md={10} className={classes.logo}>
				<Logo />
			</Grid>
			<Grid item className={classes.iconContainer}>
				<Box className={classes.iconBox}>
					<Box>
						<img src={AIcon} alt="" />
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Header;
