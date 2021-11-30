import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	container: {
		paddingLeft: 75,
		paddingRight: 75,
	},
	textField: {
		height: 70,
		borderRadius: 20,
		fontSize: 18,
		fontWeight: "bold",
	},
	textBox: {
		marginTop: 40,
	},
	heading: {
		color: "#1D3557",
		fontSize: 36,
		fontWidth: 600,
		margin: 0,
	},
	subHeading: {
		margin: 0,
		fontSize: 18,
		color: "#000000",
		opacity: 0.5,
	},

	formBox: {
		marginTop: 50,
	},

	marginBottom: {
		marginBottom: 10,
	},

	buttonBox: {
		marginTop: 50,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},

	button: {
		borderRadius: 20,
		height: 70,
		fontSize: 18,
		fontWidht: 600,
		textTransform: "capitalize",
	},
});
