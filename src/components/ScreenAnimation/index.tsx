import { useDrawerProgress } from '@react-navigation/drawer';
import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Animated, { Adaptable, interpolateNode } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { typeTheme } from '../../themes';
interface ScreenAnimationProps {
  children: React.ReactNode;
}

const ScreenAnimation: React.FC<ScreenAnimationProps> = ({ children }) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme() as typeTheme;

  const progress = useDrawerProgress();

  const borderRadius = interpolateNode(progress as Adaptable<number>, {
    inputRange: [0, 1],
    outputRange: [1, 30],
  });

  const scale = interpolateNode(progress as Adaptable<number>, {
    inputRange: [0, 1],
    outputRange: [1, 0.75],
  });

  const rotate = interpolateNode(progress as Adaptable<number>, {
    inputRange: [0, 1],
    outputRange: ['0deg', '-10deg'],
  });

  const animatedStyles = {
    borderRadius,
    transform: [{ scale, rotateZ: rotate }],
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.boxBackground,
      }}>
      <Animated.ScrollView
        style={[
          {
            flex: 1,
            backgroundColor: theme.colors.background,
            paddingTop: insets.top ? insets.top : 20,
          },
          animatedStyles,
        ]}>
        <View
          style={{
            paddingBottom: insets.bottom ? insets.bottom : 30,
            flex: 1,
          }}>
          {children}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default ScreenAnimation;
