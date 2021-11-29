import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	container: {
		backgroundColor: "#1D3557",
		color: "#ffffff",
		padding: 30,
		minHeight: "100vh",
	},
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
		marginRight: 15,
	},

	lineContainer: {
		display: "flex",
		alignItems: "center",
	},
	line: {
		width: "980px",
	},

	hrLine: {
		width: "960px",
	},

	boxContainer: {
		display: "flex",
		alignItems: "center",
	},

	boxCategory: {
		width: 160,
		height: 110,
		border: "2px solid #FFFFFF",
		borderTop: "7px solid  #E6DF39",
		borderRadius: 7,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
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
		marginLeft: 60,
		marginTop: 30,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#ffffff",
		textTransform: "capitalize",
	},

	newUserGridContainer: {
		maxWidth: 560,
		marginTop: 10,
		marginLeft: 5,
	},

	newUserGridItem: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},

	numberBox: {
		width: 35,
		height: 35,
		color: "#111",
		backgroundColor: "#fff",
		borderRadius: 50,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},

	newUserWidth: {
		minWidth: 230,
	},
});
