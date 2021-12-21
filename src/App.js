import "./App.css";

import { ThemeProvider } from "styled-components";

const lightTheme = {
  black: "#121212",
  white: "#fff",
};

function App() {
  return <ThemeProvider theme={lightTheme}></ThemeProvider>;
}

export default App;
