import React,{useEffect} from "react";
import {SafeAreaView, Dimensions, Platform, KeyboardAvoidingView} from 'react-native'
import {ROUTE_NAMES} from '../constants/routeNames'

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

import Logo from '../../assets/images/Logo.svg'

export const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate(ROUTE_NAMES.TAB_NAV)
        },5000)
    },[])

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                enabled
                keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : -300}>
                    
                            <Logo/>
            
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = EStyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})