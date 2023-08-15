import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import ScreenAnimation from '../../components/ScreenAnimation';
import { typeTheme } from '../../themes';
interface StatsProps {}
const Stats: React.FC<StatsProps> = () => {
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
          Stats Screen
        </Text>
      </View>
    </ScreenAnimation>
  );
};

export default Stats;
