import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	// container: {
	// 	backgroundColor: "#1D3557",
	// 	color: "#ffffff",
	// 	padding: 30,
	// 	minHeight: "100vh",
	// },

	userName: {
		fontSize: 24,
	},

	wavingHand: {
		marginLeft: 15,
	},

	categoryContainer: {
		marginTop: 30,
	},

	categoryItem: {
		// marginRight: 15,
	},

	lineContainer: {
		maxWidth: "100%",
		display: "flex",
		alignItems: "center",
	},

	line: {
		width: "100%",
	},

	hrLine: {
		width: "100%",
	},

	boxContainer: {
		display: "flex",
		alignItems: "center",
	},

	boxCategory: {
		width: 160,
		height: 110,
		color: "#111",
		backgroundColor: "#fff",
		borderTop: "8px solid  #E6DF39",
		borderRadius: 7,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textTransform: "capitalize",
		marginRight: 10,
	},

	buttonCategory: {
		width: 160,
		height: 110,
		border: "2px dashed #FFFFFF",
		borderRadius: 7,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
		textTransform: "capitalize",
	},

	buttonService: {
		width: 450,
		height: 55,
		border: "2px dashed #FFFFFF",
		borderRadius: 7,
		marginLeft: 100,
		marginTop: 30,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#ffffff",
		textTransform: "capitalize",
	},
});
