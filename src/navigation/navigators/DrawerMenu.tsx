import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import StackScreens from './Stacks';
import { useThemeContext, typeTheme } from '../../themes';
import Avatar1 from '../../../assets/images/avatar1.png';
import Logout from '../../../assets/images/logout.png';

export type DrawerMenuParamList = {
  HomeDrawer: undefined;
};
const Drawer = createDrawerNavigator<DrawerMenuParamList>();
const menuOptions = [
  {
    name: 'Home',
    label: 'Home',
  },
  {
    name: 'Profile',
    label: 'Profile',
  },
  {
    name: 'Accounts',
    label: 'Accounts',
  },
  {
    name: 'Transactions',
    label: 'Transactions',
  },
  {
    name: 'Stats',
    label: 'Stats',
  },
  {
    name: 'Settings',
    label: 'Settings',
  },
  {
    name: 'Help',
    label: 'Help',
  },
];
interface CustomDrawerContentProps extends DrawerContentComponentProps {
  theme: typeTheme;
}
const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({ navigation, theme }) => {
  const [activateIndex, setActivateIndex] = useState(0);
  const themeContext = useThemeContext();
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View
        style={{
          width: 210,
          height: 107,
          borderBottomEndRadius: 107 / 2,
          backgroundColor: theme.colors.background,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 44 / 2,
                backgroundColor: theme.colors.boxBackground,
                marginRight: 10,
              }}>
              <Image source={Avatar1} />
            </View>
            <View>
              <Text style={{ color: theme.colors.text1, fontSize: 16, fontWeight: 'bold' }}>Carol Black</Text>
              <Text style={{ color: theme.colors.text1, fontSize: 12 }}>Seatle, Washington</Text>
            </View>
          </View>
        </View>
      </View>
      {/* DrawerItem */}
      <DrawerContentScrollView
        style={{
          marginLeft: -10,
        }}>
        {menuOptions.map((item, index) => (
          <DrawerItem
            activeBackgroundColor={theme.colors.boxBackground}
            key={index}
            focused={activateIndex === index}
            label={({ focused }) => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 4,
                    height: 33,
                    marginRight: 26,
                    backgroundColor: focused ? theme.colors.primary : 'transparent',
                  }}
                />
                <Text style={{ color: theme.colors.text1, fontSize: 16, fontWeight: focused ? '900' : '600' }}>
                  {item.label}
                </Text>
              </View>
            )}
            onPress={() => {
              setActivateIndex(index);
              navigation.navigate(item.name);
            }}
          />
        ))}
      </DrawerContentScrollView>
      {/* Footer */}
      <View style={{ marginBottom: 27, marginLeft: 30 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
          onPress={() => {
            themeContext.setAuthenticated(false);
          }}>
          <Image
            source={Logout}
            style={{
              tintColor: theme.colors.text2,
              marginRight: 8,
            }}
          />
          <Text style={{ color: theme.colors.text2, fontSize: 16, fontWeight: 'bold' }}>Logout</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 42 }}>
          <Text style={{ color: theme.colors.text2, fontSize: 10 }}>Version 2.0.1</Text>
        </View>
      </View>
    </View>
  );
};
interface DrawerMenuProps {}
const DrawerMenu: React.FC<DrawerMenuProps> = () => {
  const theme = useTheme() as typeTheme;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.boxBackground,
      }}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: '60%',
            backgroundColor: 'transparent',
          },
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        useLegacyImplementation
        initialRouteName="HomeDrawer"
        drawerContent={props => {
          return <CustomDrawerContent {...props} theme={theme} />;
        }}>
        <Drawer.Screen name="HomeDrawer" component={StackScreens} />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerMenu;
