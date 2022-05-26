import React, {useEffect, useRef} from "react";
import {Dimensions, TouchableOpacity, Text, View, ScrollView, BackHandler, Platform, Animated, Image, ImageBackground} from 'react-native'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import {useTranslation} from 'react-i18next'
import Logo from '../../../assets/images/Small_Logo.svg'

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

// import {Header} from '../../components/Header.component'
import {Card} from '../../components/Card.component'
import {SubCard} from '../../components/SubCard.component'

const DUMMY = [
    {
        timeLeft: '1hr 20min Left',
        date: 'Sep 27',
        time: '9:00 am',
        name: 'John Doe',
        procedure: 'Phlebotomist',
        id: 11009900,
        address: 'Kutera apartment, 2nd stage, B block, HSR, Bangalore'
    },
    {
        timeLeft: '1hr 20min Left',
        date: 'Sep 27',
        time: '9:00 am',
        name: 'John Doe',
        procedure: 'Phlebotomist',
        id: 11009901,
        address: 'Kutera apartment, 2nd stage, B block, HSR, Bangalore'
    },
    {
        timeLeft: '1hr 20min Left',
        date: 'Sep 27',
        time: '9:00 am',
        name: 'John Doe',
        procedure: 'Phlebotomist',
        id: 11009903,
        address: 'Kutera apartment, 2nd stage, B block, HSR, Bangalore'
    },
]
const SUB_DUMMY = [
    {
        id: 1,
        date: 'Sep 27, 2022',
        time: '10:00 am',
        distance: '10.0km',
        timeLeft: '30 seconds ago'
    },
    {
        id: 2,
        date: 'Jan 31, 2022',
        time: '10:00 am',
        distance: '10.0km',
        timeLeft: '30 seconds ago'
    },
    {
        id: 3,
        date: 'Mar 28, 2022',
        time: '11:30 am',
        distance: '10.0km',
        timeLeft: '30 seconds ago'
    },

]

const height = Dimensions.get('screen').height
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 170;

export const Home = ({navigation}) => {
    const {t} = useTranslation()
    const navTitleView = useRef(null);

    useEffect(()=>{
        const onBack = () => {
            BackHandler.exitApp()
            return true
        }
        const backHandler = BackHandler.addEventListener('hardwareBackPress', onBack)
        console.log('back',backHandler)
    },[])

    let AnimatedHeaderValue = new Animated.Value(0)
    const Headear_Max_Height = 165
    const Header_Min_Height = 50

    const animatedHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
        inputRange: [0, Headear_Max_Height - Header_Min_Height],
        outputRange: ['#5C4FA6', '#5C4FA6'],
        extrapolate: 'clamp'
    })

    const animatedHeaderHeight = AnimatedHeaderValue.interpolate({
        inputRange: [0, Headear_Max_Height - Header_Min_Height],
        outputRange: [165, 50],
        extrapolate: 'clamp'
    })

    return(

        <View style={{flex:1, backgroundColor: '#fff'}}>
            {/* <Header welcome={[t("WelcomeBack"), " John!"]} welcomeText={t("StayHealthy")}/> */}
                <Animated.View style={[
                    styles.header,
                    {
                        height: animatedHeaderHeight,
                        backgroundColor: animatedHeaderBackgroundColor
                    }
                ]}>
                    <Text style={{fontSize: 16, color: '#fff'}}>{[t("WelcomeBack"), " John!"]}</Text>
                </Animated.View>
                  <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={{paddingBottom: 60}}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
                        {useNativeDriver: false}
                    )} 
                >
                <Text style={[styles.label, {marginBottom: 20}]}>Your ongoing booking</Text>
                {DUMMY.map((item)=>{
                    return(
                        <ScrollView contentContainerStyle={{paddingBottom: 15}} key={item.id}>
                            <Card   key={item.id}
                                timeLeft={item.timeLeft}
                                date={item.date}
                                time={item.time}
                                name={item.name}
                                procedure={item.procedure}
                                id={item.id}
                                address={item.address}
                            />
                        </ScrollView>
                    )
                })}
                
                <ScrollView contentContainerStyle={{backgroundColor: '#F2F2F2', paddingBottom: 15}}>
                    <View style={styles.rowContainer}>
                        <Text style={[styles.label, {marginTop: 0}]}>Upcoming Bookings</Text>
                        <View style={styles.viewLine}>
                            <Text style={styles.text}>View all</Text>
                        </View>
                    </View>
                    {SUB_DUMMY.map((item)=>{
                    return(
                        <ScrollView contentContainerStyle={{paddingBottom: 5, paddingTop: 10}} key={item.id}>
                            <SubCard   key={item.id}
                                timeLeft={item.timeLeft}
                                date={item.date}
                                time={item.time}
                                distance={item.distance}
                            />
                        </ScrollView>
                    )
                })}
                </ScrollView>
            </ScrollView>            
        </View>
    )
}

const styles = EStyleSheet.create({
    container:{
        backgroundColor: '#fff',
        paddingHorizontal: '25rem'
        
    },
    header:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowContainer:{
        flexDirection: 'row', 
        backgroundColor: '#F2F2F2', 
        alignItems: 'center', 
        marginBottom: '15rem', 
        marginTop: '15rem'
    },
    label:{
        fontSize: '18rem',
        fontFamily: 'Roboto-Medium',
        fontWeight: '500',
        color: '#212121',
        marginTop: '25rem',
        marginLeft: '25rem'
    },
    viewLine:{
        borderWidth: '2rem',  
        borderBottomColor: '#5C4FA6',
        borderTopColor: 'transparent', 
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent', 
        borderRadius:'2.5rem',
        marginLeft: '90rem'
    },
    text:{
        fontSize: '14rem',
        fontFamily: 'Roboto-Medium',
        fontWeight: '500',
        color: '#5C4FA6'
    },
    image: {
      height: MAX_HEIGHT,
      width: Dimensions.get('window').width,
      alignSelf: 'stretch',
      resizeMode: 'cover',
    },
    titleContainer: {
      flex: 1,
      paddingLeft: '25rem',
      paddingTop: '80rem',
    },
    imageTitle: {
      fontSize:'22rem',
        fontFamily: 'Roboto-Medium',
        color:'#fff',
        fontWeight: 'bold'
    },
    subImageTitle:{
      fontSize:'14rem',
      fontFamily: 'Roboto-Regular',
      fontWeight: '500',
      color:'#fff'
    } ,  
    navTitleView: {
      height: MIN_HEIGHT,
      justifyContent: 'center',
      // paddingTop: Platform.OS === 'ios' ? '40rem' : '10rem',
      paddingLeft: '25rem',
    },
    navTitle: {
      color: 'white',
      fontSize: '18rem',
      backgroundColor: 'transparent',
    },
})

