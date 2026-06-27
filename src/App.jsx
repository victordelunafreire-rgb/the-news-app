import { useState } from "react";
import { ThemeProvider } from "styled-components";
import HomeScreen from "./components/HomeScreen.jsx";
import PodcastScreen from "./components/PodcastScreen.jsx";
import { GlobalStyles, theme } from "./styles/GlobalStyles";

function App() {
	const [currentScreen, setCurrentScreen] = useState("home");

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{currentScreen === "home" ? (
				<HomeScreen onNavigate={setCurrentScreen} />
			) : (
				<PodcastScreen onNavigate={setCurrentScreen} />
			)}
		</ThemeProvider>
	);
}

export default App;
