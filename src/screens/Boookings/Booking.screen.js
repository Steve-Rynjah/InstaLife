import React, {useLayoutEffect} from "react";
import {SafeAreaView, Dimensions, View, Text} from 'react-native'

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

export const Booking = ({navigation}) => {

    //Header
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerStyle: {backgroundColor: '#5C4FA6'},
            headerTitleAlign: 'center',
            headerTitle: () => (
                <View>
                    <Text style={styles.header}>Bookins</Text>
                </View>
            )
        })
    },[navigation])

    return(
        <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
      
        </SafeAreaView>
    )
}

const styles = EStyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        fontSize:'18rem',
        fontFamily: 'Roboto-Regular',
        color:'#fff',
    }
})