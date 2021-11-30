import React from "react";
import { Grid, Box } from "@material-ui/core";
import { useStyles } from "./styles";

const UsersData = ({ newUserDatas }) => {
	const classes = useStyles();
	return (
		<>
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
		</>
	);
};

export default UsersData;
