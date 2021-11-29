import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	boxContainer: {
		backgroundColor: "#fff",
		color: "#111",
		borderRadius: 20,
		marginRight: 30,
		width: 300,
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		height: "100%",
	},

	logoContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		marginTop: 50,
	},

	iconBox: {
		width: 40,
		height: 40,
		backgroundColor: "#F1FAEE",
		borderRadius: 50,
		marginBottom: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},

	btn: {
		width: 240,
		height: 42,
		paddingLeft: 20,
		display: "flex",
		alignItems: "center",
		borderRadius: 10,
		textTransform: "uppercase",

		"&:hover": {
			cursor: "pointer",
			backgroundColor: "#1D3557",
			color: "#ffffff",
		},
		"&:active": {
			backgroundColor: "#1D3557",
			color: "#ffffff",
		},
		"&:visited": {
			backgroundColor: "#1D3557",
			color: "#ffffff",
		},
	},

	icon: {
		marginRight: 10,
	},

	link: {
		textDecoration: "none",
		color: "#1D3557",
	},

	menuContainer: {
		marginTop: 50,
	},
});
