import React from "react";
import {Dimensions, Text, View} from 'react-native'

import Calender from '../../assets/images/calender.svg'
import Account from '../../assets/images/account.svg'
import Location from '../../assets/images/location.svg'

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});


export const Card = ({timeLeft, date, time, name, procedure, id, address}) => {
    return(
        <View style={styles.container} key={id}>
            <View style={styles.rowConatiner}>
                <View style={styles.oval}>
                    <Text style={styles.timeLeft}>{timeLeft}</Text>
                </View>
                <View style={{marginLeft: 50}}/>
                <Calender/>
                <Text style={[styles.text, {marginLeft: 10}]}>{date}, <Text>{time}</Text></Text>
            </View>
            <View style={{marginLeft: 22, marginTop: 15}}>
                <Text style={styles.text_}>{name} <Text style={styles.text_}>({procedure})</Text></Text>
                <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
                    <Account/>
                    <Text style={[styles.text, {marginLeft: 5}]}>Order ID : <Text style={styles.text}>{id}</Text></Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center', paddingRight: 15}}>
                    <Location/>
                    <Text style={[styles.text, {marginLeft: 10}]}>{address}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = EStyleSheet.create({
    container:{
        width: '87.5%',
        height: '185rem',
        borderRadius: '15rem',
        backgroundColor: '#EBE8FA',
        elevation: '1.5rem',
        alignSelf: 'center',
    },
    rowConatiner:{
        flexDirection: 'row', 
        marginTop: '20rem', 
        marginLeft: '20rem',
        alignItems: 'center'
    },
    oval:{
        width: '110rem',
        height:'28rem',
        borderWidth: '1rem',
        borderColor: '#E83330',
        borderRadius: '15rem',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timeLeft:{
        fontSize: '11rem',
        fontFamily: 'Roboto-Medium',
        color: '#212121'
    },
    text:{
        fontSize: '14rem',
        fontFamily: 'Roboto-Regular',
        color: '#212121' 
    },
    text_:{
        fontSize: '16rem',
        fontFamily: 'Roboto-Medium',
        color: '#212121'
    },
    text_1:{
        fontSize: '12rem',
        fontFamily: 'Roboto-Regular',
        color: '#212121' 
    }
})