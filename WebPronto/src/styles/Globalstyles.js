import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: ${props => props.theme.fonts.primary};



}
.highlight{
    color: ${props => props.theme.colors.strongSuccess};
    text-shadow: 1px 1px 5px #3fe26554;
}

html {
    scroll-behavior: smooth;
}

button, a{
    cursor: pointer;
}
`



export const Container = styled.main`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
`

export default GlobalStyles;