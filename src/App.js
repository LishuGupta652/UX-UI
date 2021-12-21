import "./App.css";

import { ThemeProvider } from "styled-components";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ReactFibar from "./pages/ReactFibar";

const lightTheme = {
  black: "#121212",
  white: "#fff",
};

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/fiber" element={<ReactFibar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
