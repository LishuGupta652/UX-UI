import "./App.css";

import { ThemeProvider, createGlobalStyle } from "styled-components";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ReactFibar from "./pages/ReactFibar";

import { lightTheme, GlobalStyle } from "./globals/GlobalStyle";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiber" element={<ReactFibar />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
