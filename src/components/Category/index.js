import React from "react";

import { Grid, Box, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import WavingHandIcon from "../../assets/icons/wavingHandIcon.svg";
import Users from "../Users/index";
import UsersData from "../UsersData/index";
import { useStyles } from "./styles";

const Category = ({
	newUserDatas,
	newUserInputs,
	onChangeNewUser,
	handleNewUserSubmit,
	datas,
	toggleDrawer,
}) => {
	const classes = useStyles();
	return (
		<>
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
						<Grid item xs={2} className={classes.categoryItem}>
							<h3>Categories</h3>
						</Grid>
						<Grid item xs={10} className={classes.lineContainer}>
							<hr className={classes.line} />
						</Grid>
					</Grid>
					<Box className={classes.boxContainer}>
						{datas.map((data, index) => (
							<Box key={index} className={classes.boxCategory}>
								{data.category}
							</Box>
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
						<Grid item xs={2} className={classes.categoryItem}>
							<h3>Service Users</h3>
						</Grid>
						<Grid item xs={10} className={classes.lineContainer}>
							<hr className={classes.line} />
						</Grid>
					</Grid>
				</Box>
				<Box>
					<UsersData newUserDatas={newUserDatas} />
					<Users
						onChangeNewUser={onChangeNewUser}
						newUserInputs={newUserInputs}
					/>
					<Button
						onClick={handleNewUserSubmit}
						className={classes.buttonService}
					>
						<AddIcon /> Add another service user
					</Button>
					{/* 
					<Button onClick={toggleUser} className={classes.buttonService}>
						<AddIcon /> Add another service user
					</Button> */}
				</Box>
			</Grid>
		</>
	);
};

export default Category;
