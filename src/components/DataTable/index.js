import React from "react";
import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
} from "@material-ui/core";

const DataTable = ({ datas }) => {
	return (
		<TableContainer style={{ backgroundColor: "#ffffff", borderRadius: 10 }}>
			<Table>
				<TableHead style={{ backgroundColor: " #E6DF39" }}>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Category</TableCell>
						<TableCell>Asset ID</TableCell>
						<TableCell>Date of Assignment</TableCell>
						<TableCell>Assign To</TableCell>
						<TableCell>Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{datas.map((data, index) => (
						<TableRow key={index}>
							<TableCell component="th" scope="row">
								{data.assignTo}
							</TableCell>
							<TableCell>{data.category}</TableCell>
							<TableCell>{data.assetId}</TableCell>
							<TableCell>
								{data.dateOfAssignment.toLocaleDateString()}
							</TableCell>
							<TableCell>{data.assignTo}</TableCell>
							<TableCell>{data.assetStatus}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DataTable;
