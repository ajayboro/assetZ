import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
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
});
