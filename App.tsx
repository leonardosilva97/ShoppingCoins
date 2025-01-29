import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from './src/routes/Routes';
import {theme} from './src/theme/theme';
import {Toast} from '@components';
import {ToastProvider} from './src/service/Toast/Providers/ToastProvider';
import {AuthContextProvider} from '@context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <ToastProvider>
            <Router />
            <Toast />
          </ToastProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
