import React, {useEffect} from "react";
import {SafeAreaView, Dimensions, TouchableOpacity, Text, View, FlatList, ScrollView, BackHandler} from 'react-native'

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

import {Header} from '../../components/Header.component'
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


export const Home = ({navigation}) => {

    useEffect(()=>{
        const onBack = () => {
            BackHandler.exitApp()
            return true
        }
        const backHandler = BackHandler.addEventListener('hardwareBackPress', onBack)
        console.log('back',backHandler)
    },[])

    return(
        <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
            
            <Header welcome='Welcome back John!' welcomeText='Stay healthy & safe'/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 60}}>
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
            
        </SafeAreaView>
    )
}

const styles = EStyleSheet.create({
    container:{
        backgroundColor: '#fff',
        paddingHorizontal: '25rem'
        
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
    }
})