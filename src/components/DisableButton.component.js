import React from "react";
import {Dimensions, Text, View} from 'react-native'

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});


export const DisableButton = ({text}) => {
    return(
        <View style={styles.buttonContainer}>
            <Text style={[styles.buttonText, {letterSpacing: 2}]}>{text}</Text>
        </View>
    )
}

const styles = EStyleSheet.create({
    buttonContainer:{
        width: '305rem',
        height: '50rem',
        borderRadius: '5rem',
        backgroundColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize: '18rem',
        fontFamily: 'Roboto-Medium',
        color: 'rgba(0,0,0,0.2)'
    }
})