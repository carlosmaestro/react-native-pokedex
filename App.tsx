import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import StackNavigation from './src/screens/StackNavigation/StackNavigation';
import THEME from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <StackNavigation />
    </ThemeProvider>
  );
}
