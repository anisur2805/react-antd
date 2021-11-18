import logo from "./logo.svg";
import "./App.css";
// import CustomDatepicker from './components/Datepicker';
import DashboardPage from "./page/DashboardPage";
import CustomSpace from "./components/CustomSpace";
import Welcome from "./page/Welcome";
import WelcomeBack from "./page/Welcome-back";
import ButtonComponent from "./components/Button-Com";
import { Container } from "./components/styles/Container.styled";
import HeaderComponent from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
import StyledSpin from "./components/StyledSpin";
import RootUser from "./components/User/Index";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const theme = {
	colors: {
		header: "#ebefff",
		body: "#ff0",
		footer: "#ebefff",
	},
};
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route path="/about" element={<GlobalStyles />} />
					{/* <Container>
						<GlobalStyles />
					</Container> */}
					<Route path="/users" element={<HeaderComponent />} />
					<Route path="/" element={<RootUser />} />
				</Routes>

				{/* <CustomDatepicker  /> */}
				{/* <DashboardPage /> */}

				{/* <CustomSpace  /> */}
				{/* <Welcome /> */}
				{/* <WelcomeBack  /> */}
				{/* <ButtonComponent /> */}

				{/* <StyledSpin  /> */}
			</Router>
		</ThemeProvider>
	);
}

export default App;
