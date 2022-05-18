import React from 'react';
import {View, Dimensions, Text} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeActiveIcon from '../../assets/images/homeActiveIcon.svg'
import HomeInactiveIcon from '../../assets/images/homeInactiveIcon.svg'
import BookingActiveIcon from '../../assets/images/bookingActiveIcon.svg'
import BookingInactiveIcon from '../../assets/images/bookingInactiveIcon.svg'
import AlertActiveIcon from '../../assets/images/alertActiveIcon.svg'
import AlertInactiveIcon from '../../assets/images/alertInactiveIcon.svg'
import ProfileIcon from '../../assets/images/profileIcon.svg'


const {width} = Dimensions.get('screen') 
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
        screenOptions={{
            tabBarActiveTintColor: '#5F4EAC',
            tabBarInactiveTintColor: '#C9C9C9',
            tabBarStyle: styles.bottomTabContainer,
            tabBarShowLabel: false,
        }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={[styles.tabContainer, {borderBottomColor: focused ? '#5F4EAC' : 'transparent'}]}>
              {focused ? <HomeActiveIcon/> : <HomeInactiveIcon/>}
              <Text style={[styles.label, {color: focused ? '#5F4EAC' : '#666666'}]}>HOME</Text>
            </View>
          ),
          
        }}
      />
       <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={[styles.tabContainer, {borderBottomColor: focused ? '#5F4EAC' : 'transparent'}]}>
              {focused ? <BookingActiveIcon/> : <BookingInactiveIcon/>}
              <Text style={[styles.label, {color: focused ? '#5F4EAC' : '#666666'}]}>BOOKINGS</Text>
            </View>
          ),
          
        }}
      />
      <Tab.Screen
        name="Alerts"
        component={Alerts}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={[styles.tabContainer, {borderBottomColor: focused ? '#5F4EAC' : 'transparent'}]}>
              {focused ? <AlertActiveIcon/> : <AlertInactiveIcon/>}
              <Text style={[styles.label, {color: focused ? '#5F4EAC' : '#666666'}]}>ALERTS</Text>
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
            <View style={[styles.tabContainer, {borderBottomColor: focused ? '#5F4EAC' : 'transparent'}]}>
              {focused ? <ProfileIcon/> : <ProfileIcon/>}
              <Text style={[styles.label, {color: focused ? '#5F4EAC' : '#666666'}]}>PROFILE</Text>
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
        elevation: '4rem',
        backgroundColor: '#fff',
        // borderTopLeftRadius:15,
        // borderTopRightRadius:15,
        height: '55rem',
        shadowColor: '#fcb126',
        // shadowOffset: {
        //   width: 0,
        //   height: 10,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.5,
      },
      label:{
          fontSize: '10rem',
          fontFamily: 'Roboto-Regular',
          alignSelf: 'center',
          marginTop: '5rem'
      },
      tabContainer:{
        width: width/4, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: '5rem', 
        borderWidth: '2rem',  
        borderTopColor: 'transparent', 
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent', 
        borderRadius:'2.5rem',
        paddingBottom: '5rem'
      }
})
