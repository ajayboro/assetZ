import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
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
