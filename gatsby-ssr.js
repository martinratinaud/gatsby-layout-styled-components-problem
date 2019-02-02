import React from 'react';
import { ThemeProvider } from 'styled-components';

const mainTheme = {
  colors: {
    mainDark: "blue",
  }
}
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={mainTheme}>{element}</ThemeProvider>
);
