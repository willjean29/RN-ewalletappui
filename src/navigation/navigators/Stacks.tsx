import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Profile, Accounts, Transactions, Stats, Settings, Help } from '../../screens';

export type StacksParamList = {
  Home: undefined;
  Profile: undefined;
  Accounts: undefined;
  Transactions: undefined;
  Stats: undefined;
  Settings: undefined;
  Help: undefined;
};
const Stack = createNativeStackNavigator<StacksParamList>();

interface StacksProps {}

const Stacks: React.FC<StacksProps> = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Accounts"
      component={Accounts}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Transactions"
      component={Transactions}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Stats"
      component={Stats}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Help"
      component={Help}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default Stacks;
