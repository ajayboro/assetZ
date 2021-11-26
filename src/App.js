import React from "react";
import "./App.css";
import Routes from "./routes";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@material-ui/styles";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Routes />
		</ThemeProvider>
	);
};

export default App;
