import "./App.css";

import { ThemeProvider } from "styled-components";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import { lightTheme, GlobalStyle } from "./globals/GlobalStyle";
import NotFound from "./pages/NotFound";
import MarkdownIndex from "./pages/markdown/MarkdownIndex";

// projects

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/markdown" element={<MarkdownIndex />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
