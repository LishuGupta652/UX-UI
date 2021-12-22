import "./App.css";

import { ThemeProvider } from "styled-components";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import { lightTheme, GlobalStyle } from "./globals/GlobalStyle";
import NotFound from "./pages/NotFound";
import ReactFiber from "./pages/Fiber/ReactFiber";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiber" element={<ReactFiber />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
