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

const RightDrawer = ({
	dataInputs,
	onChangeDataInputs,
	handleSubmit,
	handleDateChange,
	handleDiscard,
	// selectedDate,
}) => {
	return (
		<Box style={{ width: 450, height: "100vh", padding: "15px 40px" }}>
			<Box
				style={{
					marginBottom: 50,
					display: "flex",
					alignItems: "center",
				}}
			>
				<Box style={{ marginRight: 30 }}>
					<ArrowBackIcon />
				</Box>
				<h2> Asset details</h2>
			</Box>
			<Box>
				<form>
					<TextField
						fullWidth
						name="category"
						onChange={onChangeDataInputs}
						value={dataInputs.category}
						style={{ marginBottom: 30 }}
						label="Category name"
					/>
					<TextField
						fullWidth
						name="assetId"
						onChange={onChangeDataInputs}
						value={dataInputs.assetId}
						style={{ marginBottom: 30 }}
						label="Asset ID"
					/>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							fullWidth
							style={{ marginBottom: 30 }}
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
						style={{ marginBottom: 30 }}
						label="Asset Assigned to"
					/>
				</form>
			</Box>
			<Box>
				<Chip
					style={{ margin: 6, width: 125, height: 35 }}
					label="sheetal72"
					onDelete
					color="primary"
				/>
				<Chip
					style={{ margin: 6, width: 125, height: 35 }}
					label="ravigupta5"
					onDelete
					color="primary"
				/>
			</Box>
			<Box
				style={{
					marginTop: 100,
					display: "flex",
					justifyContent: "space-around",
				}}
			>
				<Button
					onClick={handleDiscard}
					style={{
						width: 160,
						height: 45,
						border: "2px solid #1D3557",
						borderRadius: 12,
					}}
					variant="outlined"
				>
					Discard
				</Button>
				<Button
					onClick={handleSubmit}
					style={{ width: 160, height: 45, borderRadius: 12 }}
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
