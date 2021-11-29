import { Box } from "@material-ui/core";
import React from "react";
import Logo from "../Logo/index";
import { useStyles } from "./styles";
import AIcon from "../../assets/icons/a.svg";
import AssetLogsIcon from "../../assets/icons/assetlogsIcon.svg";
import CategoriesIcon from "../../assets/icons/categoriesIcon.svg";
import LogoutIcon from "../../assets/icons/logoutIcon.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const classes = useStyles();
	return (
		<Box className={classes.boxContainer}>
			<Box className={classes.logoContainer}>
				<Box className={classes.iconBox}>
					<Box>
						<img src={AIcon} alt="" />
					</Box>
				</Box>
				<Box>
					<Logo />
				</Box>
			</Box>

			<Box className={classes.menuContainer}>
				<Link to="/categories" className={classes.link}>
					<Box className={classes.btn}>
						<img className={classes.icon} src={CategoriesIcon} alt="" />
						Categories
					</Box>
				</Link>
				<Link to="/assetlogs" className={classes.link}>
					<Box className={classes.btn}>
						<img className={classes.icon} src={AssetLogsIcon} alt="" />
						AssetLogs
					</Box>
				</Link>

				<Link to="./login" className={classes.link}>
					<Box className={classes.btn}>
						<img className={classes.icon} src={LogoutIcon} alt="" /> Logout
					</Box>
				</Link>
			</Box>
		</Box>
	);
};

export default Sidebar;
