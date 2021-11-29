import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	boxContainer: {
		width: 450,
		height: "100vh",
		padding: "15px 40px",
	},

	header: {
		marginBottom: 50,
		display: "flex",
		alignItems: "center",
	},

	arrowIcon: {
		marginRight: 30,
	},

	textFieldMargin: {
		marginBottom: 30,
	},

	chip: {
		margin: 6,
		width: 125,
		height: 35,
	},

	buttonContainer: {
		marginTop: 80,
		display: "flex",
		justifyContent: "space-around",
	},

	buttonDiscard: {
		width: 160,
		height: 45,
		border: "2px solid #1D3557",
		borderRadius: 12,
	},

	buttonSubmit: {
		width: 160,
		height: 45,
		borderRadius: 12,
	},
});
