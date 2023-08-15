import { View, Text, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Images from '../../constants/Images';
import { useTheme } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { typeTheme, useThemeContext } from '../../themes';
interface SignInProps {}
const SignIn: React.FC<SignInProps> = () => {
  const dimensions = useWindowDimensions();
  const theme = useTheme() as typeTheme;
  const insets = useSafeAreaInsets();
  const themeContext = useThemeContext();
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image source={Images.color_bar} style={{ height: dimensions.height }} />
        <View
          style={{
            // marginTop: 40,
            marginTop: insets.top ? insets.top : 20,
            marginHorizontal: 26,
            marginBottom: 53,
            justifyContent: 'space-between',
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 24,
                  color: theme.colors.text1,
                }}>
                6:20 PM
              </Text>
              <Image source={Images.cloud} style={{ marginLeft: 20 }} />
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 8,
                  color: theme.colors.text1,
                }}>
                34° C
              </Text>
            </View>
            <Text
              style={{
                fontSize: 13,
                marginTop: 7,
                color: theme.colors.text3,
              }}>
              Nov.10.2020 | Wednsday
            </Text>
          </View>
          <View>
            <Image source={Images.logo} />
            <Text
              style={{
                fontSize: 28,
                color: theme.colors.text1,
                fontWeight: '600',
                marginVertical: 20,
              }}>
              eWallet
            </Text>
            <View
              style={{
                width: 190,
                height: 110,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: theme.colors.text3,
                  lineHeight: 22,
                }}>
                Open An Account For Digital E-Wallet Solutions.Instant Payouts.
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: theme.colors.text3,
                  marginVertical: 10,
                }}>
                Join For Free
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: theme.colors.primary,
                width: 190,
                height: 50,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
              onPress={() => {
                themeContext.setAuthenticated(true);
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                Sign In
              </Text>
              <Image source={Images.right_arrow} style={{ marginHorizontal: 5 }} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
              <Text style={{ fontWeight: '800', color: theme.colors.text1 }}>Create Account</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
