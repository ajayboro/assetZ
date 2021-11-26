import React, { useState, useEffect } from "react";
import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
} from "@material-ui/core";

const DataTable = () => {
	const [apiDatas, setApiDatas] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => {
				return response.json();
			})
			.then(data => {
				setApiDatas(data);
			});
	}, []);

	return (
		<TableContainer style={{ backgroundColor: "#ffffff" }}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>UserName</TableCell>
						<TableCell>Email</TableCell>
						<TableCell>Phone</TableCell>
						<TableCell>Website</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{apiDatas.map(data => (
						<TableRow key={data.id}>
							<TableCell component="th" scope="row">
								{data.name}
							</TableCell>
							<TableCell>{data.username}</TableCell>
							<TableCell>{data.email}</TableCell>
							<TableCell>{data.phone}</TableCell>
							<TableCell>{data.website}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DataTable;
