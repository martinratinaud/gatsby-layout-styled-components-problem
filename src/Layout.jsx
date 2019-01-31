import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Bordered = styled('div')`
  border: 1px solid red;
`;

const mainTheme = {
  colors: {
    mainDark: "red",
  }
}

export default ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    <Bordered>
      {children}
    </Bordered>
  </ThemeProvider>
);
