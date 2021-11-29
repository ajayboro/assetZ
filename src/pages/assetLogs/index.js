import React from "react";
import { Grid, Box } from "@material-ui/core";
import Sidebar from "../../components/Sidebar/index";
import DataTable from "../../components/DataTable";
import { useStyles } from "./styles";

const AssetLogs = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.gridContainer}>
			<Grid item sm={3}>
				<Sidebar />
			</Grid>

			<Grid item sm={9}>
				<Box>
					<h2>Asset Logs</h2>
				</Box>
				<DataTable />
			</Grid>
		</Grid>
	);
};

export default AssetLogs;
