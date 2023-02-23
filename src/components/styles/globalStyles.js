import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
        font-size: 100%;
    }

    *, *::before, *::after{
        box-sizing: inherit;
        margin: 0;
        padding: 0;
        scroll-behaviour: smooth;
        
    }

    *:focus{
        outline: none;
    }

`
export default GlobalStyles;