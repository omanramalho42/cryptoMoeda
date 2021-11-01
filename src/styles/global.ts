import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        background-color: #1a1a1c;
        color: #fff;
    }
`;