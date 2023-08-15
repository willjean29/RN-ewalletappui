import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import ScreenAnimation from '../../components/ScreenAnimation';
import Images from '../../constants/Images';
import { dummyData } from '../../mock';
import { typeTheme } from '../../themes';
const Home = () => {
  const theme = useTheme() as typeTheme;

  return (
    <ScreenAnimation>
      {/* Header */}
      <HeaderSection style={{ marginTop: 0 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={Images.logo} style={{ marginRight: 10 }} />
          <Text style={{ fontSize: 28, color: theme.colors.text1, fontWeight: '600' }}>eWallet</Text>
        </View>
        <Image
          source={Images.union}
          style={{
            width: 19,
            height: 19,
            tintColor: theme.colors.text2,
          }}
        />
      </HeaderSection>
      {/* Account Overview */}
      <HeaderSection style={{ marginTop: 50 }}>
        <Text
          style={{
            fontSize: 16,
            color: theme.colors.text2,
            fontWeight: '600',
          }}>
          Account Overview
        </Text>
      </HeaderSection>
      <View
        style={{
          backgroundColor: theme.colors.boxBackground,
          marginHorizontal: 25,
          marginTop: 20,
          borderRadius: 12,
          height: 116,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{ marginLeft: 25 }}>
          <Text
            style={{
              fontSize: 28,
              color: theme.colors.text1,
              fontWeight: '600',
              marginBottom: 8,
            }}>
            20,600
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: theme.colors.text2,
              fontWeight: '400',
            }}>
            Current balance
          </Text>
        </View>
        <View
          style={{
            width: 48,
            height: 48,
            backgroundColor: theme.colors.primary,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 25,
          }}>
          <Image source={Images.plus} />
        </View>
      </View>

      {/* Send Money */}
      <HeaderSection style={{ marginTop: 40 }}>
        <Text
          style={{
            fontSize: 16,
            color: theme.colors.text2,
            fontWeight: '600',
          }}>
          Send Money
        </Text>
        <Image
          source={Images.scan}
          style={{
            width: 24,
            height: 24,
            tintColor: theme.colors.text2,
          }}
        />
      </HeaderSection>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dummyData.SendMoneyRecords}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  marginTop: 20,
                  marginLeft: index === 0 ? 25 : 0,
                  marginRight: index === dummyData.SendMoneyRecords.length - 1 ? 0 : 10,
                }}>
                {index === 0 ? (
                  <View
                    style={{
                      width: 52,
                      height: 120,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{
                        width: 52,
                        height: 52,
                        backgroundColor: theme.colors.primary,
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image source={item.img} />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View
                    style={{
                      width: 110,
                      height: 120,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: theme.colors.boxBackground,
                      borderRadius: 12,
                    }}>
                    <View
                      style={{
                        backgroundColor: theme.colors.background,
                        width: 52,
                        height: 52,
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: 'rgba(58,66,118,0.2)',
                        borderWidth: 2,
                      }}>
                      <Image source={item.avatar} />
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: theme.colors.text3,
                        marginTop: 16,
                      }}>
                      {item.name}
                    </Text>
                  </View>
                )}
              </View>
            );
          }}
        />
      </View>
      {/* Services */}
      <HeaderSection style={{ marginTop: 40 }}>
        <Text
          style={{
            fontSize: 16,
            color: theme.colors.text2,
            fontWeight: '600',
          }}>
          Services
        </Text>
        <Image
          source={Images.filter}
          style={{
            width: 24,
            height: 24,
            tintColor: theme.colors.text2,
          }}
        />
      </HeaderSection>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: 25,
            marginTop: 20,
            // backgroundColor: 'red',
            justifyContent: 'space-between',
          }}>
          {dummyData.Services.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  height: 96,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 10,
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    backgroundColor: theme.colors.boxBackground,
                    width: 60,
                    height: 60,
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={item.img} />
                </View>
                <Text
                  style={{
                    color: theme.colors.text3,
                    fontSize: 10,
                    marginTop: 6,
                    textAlign: 'center',
                    width: 52,
                  }}>
                  {item.name}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      {/* <Text>Hola</Text>
      <Text>Hola</Text> */}
    </ScreenAnimation>
  );
};

const HeaderSection = styled.View`
  margin: 0px 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // border: 1px solid red;
`;

export default Home;
