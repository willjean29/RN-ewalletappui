import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerMenu from './DrawerMenu';
import lightTheme from '../../themes/Light';
import darkTheme from '../../themes/Dark';
import { useThemeContext } from '../../themes';
import StackDefault from './StackDefault';

export default function AppNavigator() {
  const theme = useThemeContext();
  return (
    <NavigationContainer theme={theme.mode === 'dark' ? darkTheme : lightTheme}>
      {theme.isAuthenticated ? <DrawerMenu /> : <StackDefault />}
    </NavigationContainer>
  );
}
