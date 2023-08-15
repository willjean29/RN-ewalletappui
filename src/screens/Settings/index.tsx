import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, Switch } from 'react-native';
import ScreenAnimation from '../../components/ScreenAnimation';
import { typeTheme, useThemeContext } from '../../themes';
interface SettingsProps {}
const Settings: React.FC<SettingsProps> = () => {
  const theme = useTheme() as typeTheme;
  const themeContext = useThemeContext();

  return (
    <ScreenAnimation>
      <View
        style={{
          alignItems: 'center',
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 24,
            color: theme.colors.text1,
            fontWeight: '900',
          }}>
          Settings Screend
        </Text>
        <View>
          <Switch
            value={themeContext.mode === 'dark'}
            onValueChange={value => {
              themeContext.setMode(value ? 'dark' : 'light');
            }}
          />
        </View>
      </View>
    </ScreenAnimation>
  );
};

export default Settings;
