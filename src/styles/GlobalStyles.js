import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
    --color-brand-primary : #3d52a0;
    --color-brand-secondary : #7091e6;
    --color-brand-background : #a2b2f5;
    --color-brand-new : #ede8f5;


    --color-text-primary : #fff;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

span , p , a , Button , label , h1 {
    font-family: "poppins" , sans-serif;
}

`;

export default GlobalStyles;