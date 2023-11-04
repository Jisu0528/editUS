import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
  body {
    background-color: #070D17;
    color: #FFFFFF;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyle;