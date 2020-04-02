import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import Routes from './routes';
import theme from './styles/theme';

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Routes />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
