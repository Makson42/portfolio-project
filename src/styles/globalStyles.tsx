import { createGlobalStyle } from 'styled-components';
import FiraCode from "./fonts/FiraCode-VariableFont_wght.ttf"

export const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "FiraCode", sans-serif;
        background-color: #282C33;
    }
`

export const FontStyles = createGlobalStyle`
@font-face {
    font-family: "FiraCode"; 
    src: url(${FiraCode})
}
    `