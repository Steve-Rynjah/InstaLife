import React from "react";
import {SafeAreaView, Dimensions, Platform, KeyboardAvoidingView, TouchableOpacity, Text} from 'react-native'

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});


export const Profile = ({navigation}) => {

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                enabled
                keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : -300}>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <Text style={{fontSize: 24, color: '#333'}}>Profile</Text>
                    </TouchableOpacity>           
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