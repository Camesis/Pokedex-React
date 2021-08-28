import { createGlobalStyle } from 'styled-components';

import Background from '../assets/who.png';

const GlobalStyles = createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 97.5%;
  }
  html, body {
    height: 100%;
  }
  body {
    font-family: Roboto, Oxygen,Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #1c1c1c;
    background: url(${Background});
    background-repeat: no-repeat;
  }

  #root {
    max-width: 1080px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;