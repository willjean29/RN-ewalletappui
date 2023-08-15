import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../../screens';

export type StackDefaultParamList = {
  SignIn: undefined;
};
const Stack = createNativeStackNavigator<StackDefaultParamList>();

interface StackDefaultProps {}

const StackDefault: React.FC<StackDefaultProps> = () => (
  <Stack.Navigator initialRouteName="SignIn">
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default StackDefault;
