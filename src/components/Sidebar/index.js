import { Box } from "@material-ui/core";
import React from "react";
import Logo from "../Logo/index";
import { useStyles } from "./styles";
import AIcon from "../../assets/icons/a.svg";
import AssetLogsIcon from "../../assets/icons/assetlogsIcon.svg";
import CategoriesIcon from "../../assets/icons/categoriesIcon.svg";
import LogoutIcon from "../../assets/icons/logoutIcon.svg";
import { Link } from "react-router-dom";

const Sidebar = ({ setAssetLogs }) => {
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
				<Box onClick={() => setAssetLogs(true)} className={classes.btn}>
					<img className={classes.icon} src={CategoriesIcon} alt="" />
					Categories
				</Box>
				{/* <Link to="/categories" className={classes.link}></Link> */}
				{/* <Link to="" className={classes.link}></Link> */}
				<Box onClick={() => setAssetLogs(false)} className={classes.btn}>
					<img className={classes.icon} src={AssetLogsIcon} alt="" />
					AssetLogs
				</Box>
				<Link to="/" className={classes.link}>
					<Box className={classes.btn}>
						<img className={classes.icon} src={LogoutIcon} alt="" /> Logout
					</Box>
				</Link>
			</Box>
		</Box>
	);
};

export default Sidebar;
