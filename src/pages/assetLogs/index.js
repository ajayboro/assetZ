import React from "react";
import { Grid, Box } from "@material-ui/core";
import Sidebar from "../../components/Sidebar/index";
import DataTable from "../../components/DataTable";

const AssetLogs = () => {
	return (
		<Grid
			container
			style={{
				backgroundColor: "#1D3557",
				color: "#ffffff",
				padding: 30,
				height: "100vh",
			}}
		>
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
