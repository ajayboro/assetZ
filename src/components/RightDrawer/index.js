import React from "react";
import {
	Box,
	TextField,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	Chip,
	Button,
} from "@material-ui/core";

import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DateFnsUtils from "@date-io/date-fns";

import { useStyles } from "./styles";

const RightDrawer = ({
	dataInputs,
	onChangeDataInputs,
	handleSubmit,
	handleDateChange,
	handleDiscard,
}) => {
	const classes = useStyles();
	return (
		<Box className={classes.boxContainer}>
			<Box className={classes.header}>
				<Box className={classes.arrowIcon}>
					<ArrowBackIcon />
				</Box>
				<h2> Asset details</h2>
			</Box>
			<Box>
				<form>
					<TextField
						fullWidth
						className={classes.textFieldMargin}
						name="category"
						onChange={onChangeDataInputs}
						value={dataInputs.category}
						label="Category name"
						autoComplete="off"
					/>
					<TextField
						fullWidth
						className={classes.textFieldMargin}
						name="assetId"
						onChange={onChangeDataInputs}
						value={dataInputs.assetId}
						label="Asset ID"
						autoComplete="off"
					/>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							fullWidth
							className={classes.textFieldMargin}
							format="MM/dd/yyyy"
							label="Date of Assignment"
							name="dateOfAssignment"
							value={dataInputs.dateOfAssignment}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
						/>
					</MuiPickersUtilsProvider>

					<FormControl fullWidth style={{ marginBottom: 30 }}>
						<InputLabel>Asset Status</InputLabel>
						<Select
							name="assetStatus"
							value={dataInputs.assetStatus}
							onChange={onChangeDataInputs}
						>
							<MenuItem value={"Active"}>Active</MenuItem>
							<MenuItem value={"Deactive"}>Deactive</MenuItem>
						</Select>
					</FormControl>
					<TextField
						fullWidth
						name="assignTo"
						onChange={onChangeDataInputs}
						value={dataInputs.assignTo}
						className={classes.textFieldMargin}
						label="Asset Assigned to"
						autoComplete="off"
					/>
				</form>
			</Box>
			<Box>
				<Chip
					className={classes.chip}
					label="sheetal72"
					onDelete
					color="primary"
				/>
				<Chip
					className={classes.chip}
					label="ravigupta5"
					onDelete
					color="primary"
				/>
			</Box>
			<Box className={classes.buttonContainer}>
				<Button
					onClick={handleDiscard}
					className={classes.buttonDiscard}
					variant="outlined"
				>
					Discard
				</Button>
				<Button
					onClick={handleSubmit}
					className={classes.buttonSubmit}
					variant="contained"
					color="primary"
				>
					Save
				</Button>
			</Box>
		</Box>
	);
};

export default RightDrawer;
