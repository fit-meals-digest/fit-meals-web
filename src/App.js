import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import theme from './theme';
import BrandButton from './components/brandbutton';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrandButton color="primary" children="Click Here">
        </BrandButton>

        <BrandButton color="secondary" children="Second Button">
        </BrandButton>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;