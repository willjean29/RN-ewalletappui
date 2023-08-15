import React, { createContext, useState, useEffect } from 'react';
import { StatusBar, Appearance } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import lightTheme from './Light';
import darkTheme from './Dark';

const defaultMode = Appearance.getColorScheme() || 'light';

const ThemeContext = createContext({
  mode: defaultMode,
  setMode: (mode: 'light' | 'dark') => console.log(mode),
  isAuthenticated: false,
  setAuthenticated: (authenticated: boolean) => console.log(authenticated),
});

const useThemeContext = () => React.useContext(ThemeContext);
interface ManageThemeProviderProps {
  children: React.ReactNode;
}
const ManageThemeProvider: React.FC<ManageThemeProviderProps> = ({ children }) => {
  const [themeState, setThemeState] = useState(defaultMode);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setMode = (mode: 'light' | 'dark') => {
    setThemeState(mode);
  };
  const setAuthenticated = (auth: boolean) => {
    setIsAuthenticated(auth);
  };
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setThemeState(colorScheme as 'light' | 'dark');
    });
    return () => subscription.remove();
  }, []);
  return (
    <ThemeContext.Provider value={{ mode: themeState, setMode, isAuthenticated, setAuthenticated }}>
      <ThemeProvider theme={themeState === 'dark' ? darkTheme : lightTheme}>
        <>
          <StatusBar barStyle={themeState === 'light' ? 'dark-content' : 'light-content'} />
          {children}
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

interface ThemeManagerProps {
  children: React.ReactNode;
}
const ThemeManager: React.FC<ThemeManagerProps> = ({ children }) => (
  <ManageThemeProvider>{children}</ManageThemeProvider>
);
export type typeTheme = typeof lightTheme;
export { useThemeContext, lightTheme, darkTheme };

export default ThemeManager;
