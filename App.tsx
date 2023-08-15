/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import ThemeManager from './src/themes';
import { AppNavigator } from './src/navigation';

const App = () => {
  return (
    <ThemeManager>
      <AppNavigator />
    </ThemeManager>
  );
};

export default App;
