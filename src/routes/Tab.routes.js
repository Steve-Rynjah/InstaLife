import React from 'react';
import {View, Dimensions, Text, ImageBackground} from 'react-native'
import {Avatar} from 'react-native-paper'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeActiveIcon from '../../assets/images/homeActiveIcon.svg'
import HomeInactiveIcon from '../../assets/images/homeInactiveIcon.svg'
import BookingActiveIcon from '../../assets/images/bookingActiveIcon.svg'
import BookingInactiveIcon from '../../assets/images/bookingInactiveIcon.svg'
import AlertActiveIcon from '../../assets/images/alertActiveIcon.svg'
import AlertInactiveIcon from '../../assets/images/alertInactiveIcon.svg'
import ProfileIcon from '../../assets/images/profileIcon.svg'


const height = Dimensions.get('screen').height 
import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

import {Home} from '../screens/Home/Home.screen'
import {Booking} from '../screens/Boookings/Booking.screen'
import {Alerts} from '../screens/Alert/Alerts.screen'
import {Profile} from '../screens/Profile/Profile.screen'

const Tab = createBottomTabNavigator();

export const TabNav = () => {
  return (
    <Tab.Navigator 
        screenOptions={()=>(
          {
            tabBarActiveTintColor: '#5F4EAC',
            tabBarInactiveTintColor: '#C9C9C9',
            tabBarStyle: [styles.bottomTabContainer],
            tabBarShowLabel: false,
        }
        )}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{marginTop: focused ? height * (-0.002) : 0}}>
              {focused ? <HomeActiveIcon/> : <HomeInactiveIcon/>}
            </View>
          ),
        }}
      />
       <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{marginTop: focused ? height * (-0.002) : 0}}>
              {focused ? <BookingActiveIcon/> : <BookingInactiveIcon/>}
            </View>
          ),
          
        }}
      />
      <Tab.Screen
        name="Alerts"
        component={Alerts}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{marginTop: focused ? height * (-0.002) : 0}}>
              {focused ? <AlertActiveIcon/> : <AlertInactiveIcon/>}
            </View>
          ),
          
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: '',
          tabBarIcon: ({focused}) => (
            <View style={{marginTop: focused ? height * (-0.002) : 0}}>
              {focused ? 
                <ImageBackground source={require('../../assets/images/profileActiveIcon.png')} resizeMode='contain'style={styles.profileBackground}>
                    <ProfileIcon/>
                </ImageBackground> 
                : 
                <ImageBackground source={require('../../assets/images/profileInactiveIcon.png')} resizeMode='contain'style={styles.profileBackground}>
                    <ProfileIcon/>
                </ImageBackground>}

            </View>
          ),
          
        }}
      />
    </Tab.Navigator>
  );
};

const styles = EStyleSheet.create({
    bottomTabContainer: {
        position: 'absolute',
        bottom: '0rem',
        elevation: '0rem',
        backgroundColor: 'transparent',
        // borderTopLeftRadius:15,
        // borderTopRightRadius:15,
        height: '55rem',
        shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 10,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.5,
        borderTopColor: 'transparent',
      },
      profileBackground:{
        width: '101rem',
        height:  '55rem',
        alignItems: 'center', 
        justifyContent: 'center',
      }
})
