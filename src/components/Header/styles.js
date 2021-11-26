import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	container: {
		paddingTop: 30,
		paddingBottom: 30,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		display: "flex",
		alignItems: "center",
	},
	iconContainer: {
		display: "flex",
		alignItems: "center",
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
});
