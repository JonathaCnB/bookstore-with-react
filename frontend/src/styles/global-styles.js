import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body {
  font-family: sans-serif;
  background: ${({ theme }) => theme.colors.gray};
}

html, body, #root {
  height: 100%;
}

button {
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
}

ul {
  list-style: none;
}
`;
