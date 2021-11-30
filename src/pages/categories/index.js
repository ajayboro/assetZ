import React, { useState } from "react";
import { Grid, Box, Drawer } from "@material-ui/core";
import Sidebar from "../../components/Sidebar/index";
import RightDrawer from "../../components/RightDrawer";
import Category from "../../components/Category/index";
import DataTable from "../../components/DataTable/index";
import { useStyles } from "./styles";

const Categories = () => {
	const classes = useStyles();

	const [dataInputs, setDataInputs] = useState({
		category: "",
		assetId: "",
		assignTo: "",
		dateOfAssignment: new Date(),
		assetStatus: "",
	});

	const [newUserInputs, setNewUsersInputs] = useState({
		newUserName: "",
		newUserEmail: "",
	});

	const [datas, setDatas] = useState([]);
	const [newUserDatas, setNewUserDatas] = useState([]);

	const [toggle, setToggle] = useState(false);
	const [assetLogs, setAssetLogs] = useState(true);

	const onChangeDataInputs = e => {
		const { name, value } = e.target;
		setDataInputs({ ...dataInputs, [name]: value });
	};

	const onChangeNewUser = e => {
		const { name, value } = e.target;
		setNewUsersInputs({ ...newUserInputs, [name]: value });
	};

	const handleDateChange = date => {
		setDataInputs(prev => ({
			...prev,
			dateOfAssignment: date,
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (
			!dataInputs.category ||
			!dataInputs.assetId ||
			!dataInputs.assignTo ||
			!dataInputs.dateOfAssignment ||
			!dataInputs.assetStatus
		) {
			alert("Please fill the form");
		} else {
			setDatas([...datas, dataInputs]);
		}
		setDataInputs({
			category: "",
			assetId: "",
			assignTo: "",
			dateOfAssignment: new Date(),
			assetStatus: "",
		});
	};

	const handleNewUserSubmit = e => {
		e.preventDefault();
		if (!newUserInputs.newUserName || !newUserInputs.newUserEmail) {
			alert("Please enter new user details.");
		} else {
			setNewUserDatas([...newUserDatas, newUserInputs]);
		}
		setNewUsersInputs({
			newUserName: "",
			newUserEmail: "",
		});
	};

	const handleDiscard = e => {
		e.preventDefault();
		setDataInputs({
			category: "",
			assetId: "",
			assignTo: "",
			dateOfAssignment: new Date(),
			assetStatus: "",
		});
	};

	const toggleDrawer = open => {
		setToggle(open);
	};

	return (
		<Grid container className={classes.container}>
			<Grid item sm={12} md={12} lg={3}>
				<Sidebar setAssetLogs={setAssetLogs} />
			</Grid>

			{assetLogs ? (
				<Category
					datas={datas}
					newUserDatas={newUserDatas}
					newUserInputs={newUserInputs}
					onChangeNewUser={onChangeNewUser}
					handleNewUserSubmit={handleNewUserSubmit}
					toggleDrawer={toggleDrawer}
				/>
			) : (
				<Grid item sm={9}>
					<Box>
						<h2>Asset Logs</h2>
					</Box>
					<DataTable datas={datas} />
				</Grid>
			)}

			<Drawer
				anchor={"right"}
				open={toggle}
				onClose={() => toggleDrawer(false)}
			>
				<RightDrawer
					dataInputs={dataInputs}
					handleDateChange={handleDateChange}
					onChangeDataInputs={onChangeDataInputs}
					handleSubmit={handleSubmit}
					handleDiscard={handleDiscard}
				/>
			</Drawer>
		</Grid>
	);
};

export default Categories;
