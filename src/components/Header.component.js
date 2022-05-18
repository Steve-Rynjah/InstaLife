import React from "react";
import {Dimensions, Text, View} from 'react-native'

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});


export const Header = ({welcome, welcomeText}) => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.welcome}>{welcome}</Text>
            <Text style={styles.welcomeText}>{welcomeText}</Text>
        </View>
    )
}

const styles = EStyleSheet.create({
    headerContainer:{
        width: '100%',
        height: '165rem',
        backgroundColor: '#5C4FA6',
        paddingLeft: '25rem',
        paddingTop: '80rem',
    },
    welcome:{
        fontSize:'22rem',
        fontFamily: 'Roboto-Medium',
        color:'#fff',
        fontWeight: 'bold'
    },
    welcomeText:{
        fontSize:'14rem',
        fontFamily: 'Roboto-Regular',
        fontWeight: '500',
        color:'#fff'
    }    
})