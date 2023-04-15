import React from 'react';
import { ThemeProvider, Button } from '@material-ui/core';
import theme from './theme';
import BrandButton from './components/brandbutton';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrandButton color="primary" children="Click Here">
      </BrandButton>

      <BrandButton color="secondary" children="Second Button">
      </BrandButton>
    </ThemeProvider>
  );
}

export default App;