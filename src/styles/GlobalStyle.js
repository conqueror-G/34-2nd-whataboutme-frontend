import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    };

    button{
        cursor: pointer;
    };
    
    a {
        text-decoration: none;
        color: black;
    };
`;

export default GlobalStyle;
