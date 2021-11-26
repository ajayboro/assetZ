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
		<Box
			style={{
				backgroundColor: "#fff",
				color: "#111",
				borderRadius: 20,
				marginRight: 30,
				width: 300,
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				height: "100%",
			}}
		>
			<Box
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					marginTop: 50,
				}}
			>
				<Box
					style={{
						width: 40,
						height: 40,
						backgroundColor: "#F1FAEE",
						borderRadius: 50,
						marginBottom: 10,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Box>
						<img src={AIcon} alt="" />
					</Box>
				</Box>
				<Box>
					<Logo />
				</Box>
			</Box>

			<Box style={{ marginTop: 50 }}>
				<Link to="/categories" className={classes.link}>
					<Box className={classes.btn}>
						<img className={classes.icon} src={CategoriesIcon} alt="" />{" "}
						Categories
					</Box>
				</Link>
				<Link to="/assetlogs" className={classes.link}>
					<Box className={classes.btn}>
						<img className={classes.icon} src={AssetLogsIcon} alt="" />{" "}
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
