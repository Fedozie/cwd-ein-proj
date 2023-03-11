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

    textarea{
        font-family: inherit;
    }

    @media only screen (min-width: ${({theme}) => theme.breakpoints.mbl}) and (max-width: ${({theme}) => theme.breakpoints.tbt}){
        html{
            font-size: 80%;
        }
    }

    @media only screen and (max-width: ${({theme}) => theme.breakpoints.mbl}){
        html{
            font-size: 60%;
        }
    }

    

`
export default GlobalStyles;