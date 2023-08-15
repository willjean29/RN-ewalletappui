import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import ScreenAnimation from '../../components/ScreenAnimation';
import { typeTheme } from '../../themes';
interface AccountsProps {}
const Accounts: React.FC<AccountsProps> = () => {
  const theme = useTheme() as typeTheme;
  return (
    <ScreenAnimation>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: theme.colors.text1,
            fontSize: 24,
            fontWeight: '800',
          }}>
          Accounts Screen
        </Text>
      </View>
    </ScreenAnimation>
  );
};

export default Accounts;
