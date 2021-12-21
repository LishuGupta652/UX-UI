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
  text-decoration: none;
  list-style: none;
}
body,
html {
  width: 100%;
  scroll-behavior: smooth;
  font-family: Poppins;
  --webkit-font-smoothing: antialiased;
  background: #eaeaea;
}
a {
  text-decoration: none;
  color: inherit;
}

    
  `;
