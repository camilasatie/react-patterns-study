import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.color.peach};
    color: ${(props) => props.theme.color.purple};

    font-family: ${(props) => props.theme.font.family};
    font-size: ${(props) => props.theme.font.size};
    font-weight: ${(props) => props.theme.font.weight};
  }
`;
