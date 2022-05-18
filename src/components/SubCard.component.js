import React from "react";
import {Dimensions, Text, View} from 'react-native'

import Calender from '../../assets/images/calender_2.svg'
import Distance from '../../assets/images/distance.svg'

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});


export const SubCard = ({date, time, distance, timeLeft, id}) => {
    return(
        <View style={styles.container} key={id}>
            <View style={styles.rowConatiner}>
                <Calender/>
                <Text style={[styles.text, {marginLeft: 10}]}>Scheduled for  <Text style={styles.text_}>{date}, <Text>{time}</Text></Text></Text>
            </View>
            <View style={styles.lineBreak}/>
            <View style={styles.rowConatiner}>
                <Distance/>
                <Text style={[styles.text, {marginLeft: 10}]}>Location is  <Text style={styles.text_}>{distance} <Text>far from you</Text></Text></Text>
            </View>
            <View style={styles.lineBreak}/>
            <View style={styles.rowConatiner}>
                <View style={styles.oval}>
                    <Text style={styles.text_1}>{timeLeft}</Text>
                </View>
                <View style={styles.startLine}>
                    <Text style={styles.startText}>Start</Text>
                </View>
            </View>
        </View>
    )
}

const styles = EStyleSheet.create({
    container:{
        width: '87.5%',
        height: '150rem',
        borderRadius: '15rem',
        backgroundColor: '#FFF',
        elevation: '1.5rem',
        alignSelf: 'center',
    },
    lineBreak:{
        width: '100%',
        height: '1rem',
        backgroundColor: '#F2F2F2',
        marginTop: '10rem'
    },
    rowConatiner:{
        flexDirection: 'row', 
        marginTop: '15rem', 
        marginLeft: '20rem',
        alignItems: 'center'
    },
    oval:{
        width: '110rem',
        height:'26rem',
        borderRadius: '15rem',
        backgroundColor: '#F9E1B8',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: '14rem',
        fontFamily: 'Roboto-Medium',
        fontWeight: '500',
        color: '#5C4FA6' 
    },
    text_:{
        fontSize: '13rem',
        fontFamily: 'Roboto-Medium',
        fontWeight: '500',
        color: '#212121' 
    },
    text_1:{
        fontSize: '10.5rem',
        fontFamily: 'Roboto-Regular',
        fontWeight: '500',
        color: '#212121'
    },
    startLine:{
        borderWidth: '2rem',  
        borderBottomColor: '#5C4FA6',
        borderTopColor: 'transparent', 
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent', 
        borderRadius:'2.5rem',
        marginLeft: '140rem',
    },
    startText:{
        fontSize: '12rem',
        fontFamily: 'Roboto-Medium',
        fontWeight: '500',
        color: '#5C4FA6'
    }
})