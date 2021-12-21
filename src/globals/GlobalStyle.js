import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  black: "#121212",
  white: "#fff",
};

export const GlobalStyle = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  width: 100%;
  scroll-behavior: smooth;
  font-family: Poppins;
  --webkit-font-smoothing: antialiased;
}
a {
  color: white;
  text-decoration: none;
}

    
  `;
