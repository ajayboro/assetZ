import React, { useState } from "react";
import { Grid, Box, Button, Drawer } from "@material-ui/core";
import Sidebar from "../../components/Sidebar/index";
import AddIcon from "@material-ui/icons/Add";
import RightDrawer from "../../components/RightDrawer";
import WavingHandIcon from "../../assets/icons/wavingHandIcon.svg";
import { useStyles } from "./styles";
import Users from "../../components/Form/Users/index";

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
	const [addNewUser, setAddNewUser] = useState(false);

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
		setAddNewUser(false);
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

	const toggleUser = () => {
		setAddNewUser(true);
	};

	return (
		<Grid container className={classes.container}>
			<Grid item sm={12} md={12} lg={3}>
				<Sidebar />
			</Grid>
			<Grid item sm={12} md={12} lg={9}>
				<Box>
					Welcome <br />
					<Box className={classes.userName}>
						Ilya Sahi
						<img className={classes.wavingHand} src={WavingHandIcon} alt="" />
					</Box>
				</Box>
				<Box>
					<Grid container className={classes.categoryContainer}>
						<Grid item className={classes.categoryItem}>
							<h3>Categories</h3>
						</Grid>
						<Grid item className={classes.lineContainer}>
							<hr className={classes.line} />
						</Grid>
					</Grid>
					<Box className={classes.boxContainer}>
						{datas.map(data => (
							<Box className={classes.boxCategory}>{data.category}</Box>
						))}
						<Button
							onClick={() => {
								toggleDrawer(true);
							}}
							className={classes.buttonCategory}
						>
							Add a new <br /> category
						</Button>
					</Box>
				</Box>
				<Box>
					<Grid container className={classes.categoryContainer}>
						<Grid item className={classes.categoryItem}>
							<h3>Service Users</h3>
						</Grid>
						<Grid item className={classes.lineContainer}>
							<hr className={classes.hrLine} />
						</Grid>
					</Grid>
				</Box>
				<Box>
					{addNewUser ? (
						<Users
							onChangeNewUser={onChangeNewUser}
							newUserInputs={newUserInputs}
						/>
					) : (
						<Box>
							{newUserDatas.map((data, index) => {
								return (
									<Box key={index}>
										<Grid
											container
											className={classes.newUserGridContainer}
											spacing={3}
										>
											<Grid item xs={7}>
												<Box className={classes.newUserGridItem}>
													<Box className={classes.numberBox}>{index + 1}</Box>
													<Box className={classes.newUserWidth}>
														<Box>Username</Box>
														<Box>{data.newUserName}</Box>
														<Box>
															<hr className={classes.newUserWidth} />
														</Box>
													</Box>
												</Box>
											</Grid>
											<Grid item xs={5}>
												<Box className={classes.newUserWidth}>
													<Box>Email</Box>
													<Box>{data.newUserEmail}</Box>
													<Box>
														<hr className={classes.newUserWidth} />
													</Box>
												</Box>
											</Grid>
										</Grid>
									</Box>
								);
							})}
						</Box>
					)}
					{addNewUser ? (
						<Button
							onClick={handleNewUserSubmit}
							className={classes.buttonService}
						>
							<AddIcon /> Submit another service user
						</Button>
					) : (
						<Button onClick={toggleUser} className={classes.buttonService}>
							<AddIcon /> Add another service user
						</Button>
					)}
				</Box>
			</Grid>
			<Drawer
				anchor={"right"}
				open={toggle}
				onClose={() => toggleDrawer(false)}
			>
				<RightDrawer
					dataInputs={dataInputs}
					datas={datas}
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
