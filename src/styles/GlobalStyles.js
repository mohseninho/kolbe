import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
    --color-brand-primary : #3d52a0;
    --color-brand-secondary : #7091e6;
    --color-brand-new : #ede8f5;
}

*{
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box;
}

`;

export default GlobalStyles;