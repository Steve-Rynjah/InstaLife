import React, {useState} from "react";
import {SafeAreaView, Dimensions, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modal';
import OTPInputView from '@twotalltotems/react-native-otp-input'

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

import Logo from '../../assets/images/Small_Logo.svg'
import {Button} from '../components/Button.component'

export const Registration = ({navigation}) => {
    const [input, setInput] = useState('')
    const [modal, setModal] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [otp, setOtp] = useState('')
    const [err, setErr] = useState(false)

    console.log('otp', otp)

    const numberCheck = () => {
        if(input === ''){
            Alert.alert('Please enter the required field')
        } else if(input.length < 10){
            Alert.alert('Please enter 10 digit number')
        } else{
            setModal(true)
        }
    }

    const otpCheck = () => {
        {otp == '9452' ? (
            [navigation.navigate('TabNav'), setInput(''), setOtp(''), setModal(false)]
        ) : (
            setErr(true)
        )}
    }

    return(
        <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
                <KeyboardAwareScrollView bounces={false}>
                    <View style={styles.container}>
                        <Logo/>
                            <View style={{marginTop: 130}}>
                                <Text style={styles.label}>Enter your mobile number</Text>
                                <Text style={styles.text}>We will send you confirmation code</Text>
                                <View style={{flexDirection: 'row', marginTop: 50, alignItems: 'center'}}>
                                    <Text style={styles.label}>+91</Text>
                                    <View style={styles.input}>
                                        <TextInput
                                            value={input}
                                            onChangeText={(value)=> setInput(value)}
                                            style={[styles.textInput, {letterSpacing: 2.5}]}
                                            keyboardType='number-pad'
                                            maxLength={10}
                                            
                                            />
                                    </View>
                                </View>

                                <TouchableOpacity onPress={numberCheck} activeOpacity={0.5} style={{marginTop: 175}}>
                                    <Button text="CONTINUE"/>
                                </TouchableOpacity>
                            </View>

                            <Modal
                                useNativeDriver={true}
                                animationIn='slideInUp'
                                animationOut='slideOutDown'
                                isVisible={modal}
                                coverScreen
                                hasBackdrop
                                animationInTiming={500}
                                animationOutTiming={500}
                                onBackdropPress={() => [setModal(!modal), setIsLogin(false)]}
                                backdropColor={'rgba(0, 0, 0, 0.7)'}
                                style={{width: '100%',alignSelf: 'center'}}>

                                    <View style={styles.modalContainer}>
                                        {!isLogin ? (
                                            <View style={styles.modalContainerHeader}>
                                            <Text style={styles.text_1}>PASTE FROM SMS</Text>
                                            <Text style={[styles.text_2, {letterSpacing: 2.5}]}>9452</Text>
                                        </View>
                                        ) : null}
                                        <View style={{paddingHorizontal: 20}}>
                                            <OTPInputView
                                                    style={{width: '100%', height: 10, marginTop: 75, alignSelf: 'center'}}
                                                    pinCount={4}
                                                    autoFocusOnLoad
                                                    codeInputFieldStyle={styles.underlineStyleBase}
                                                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                                    onCodeFilled = {(code => {
                                                        setOtp(code)
                                                        setIsLogin(true)
                                                    })}
                                                    />
                                            {!err ? (
                                                <Text style={[styles.text_1, {marginTop: 50}]}>Please, enter 4-digit code we sent on your number as sms</Text>
                                                ) : (
                                                    <Text style={[styles.text_1, {marginTop: 50, color: '#E83330'}]}>Code is wrong. Please enter the right code and try again</Text>   
                                                )}
                                            {isLogin ? (
                                                <>
                                                    <TouchableOpacity onPress={otpCheck} activeOpacity={0.5} style={{marginTop: 45, alignSelf: 'center'}}>
                                                        <Button text="LOGIN"/>
                                                    </TouchableOpacity> 
                                                    <Text style={styles.text_3}>Resend Code</Text>
                                                </>
                                            ) : null} 
                                        </View>      
                                    </View>
                
                        </Modal>
                    </View>
                </KeyboardAwareScrollView>       
        </SafeAreaView>
    )
}

const styles = EStyleSheet.create({
    container:{
        backgroundColor: '#fff',
        paddingTop: '30rem',
        paddingHorizontal: '30rem'
    },
    label:{
        fontSize:'37rem',
        fontFamily: 'Roboto-Medium',
        color:'#212121',
        lineHeight:'54rem'
    },
    text:{
        fontSize:'17rem',
        fontFamily: 'Roboto-Medium',
        color:'#212121',
        marginTop: '30rem',
        lineHeight:'21rem'
    },
    input:{
        width:'225rem',
        height:'55rem',
        borderWidth:'1rem',
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5rem',
        backgroundColor: '#fff',
        marginLeft: '10rem',
        justifyContent: 'center',
    },
    textInput:{
        fontSize:'28rem',
        color:'rgba(0,0,0,0.5)',
        fontFamily: 'Roboto-Regular',
        position: 'absolute',
        marginLeft: '5rem'
    },
    modalContainer:{
        width: '100%',
        height: '300rem',
        borderTopLeftRadius: '15rem',
        borderTopRightRadius: '15rem',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: '-20rem',
    },
    modalContainerHeader:{
        height: '90rem',
        backgroundColor: '#F5F7F7',
        borderTopLeftRadius: '15rem',
        borderTopRightRadius: '15rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_1:{
        fontSize:'14rem',
        fontFamily: 'Roboto-Medium',
        color:'rgba(0,0,0,0.3)',
    },
    text_2:{
        fontSize:'22rem',
        fontFamily: 'Roboto-Medium',
        color:'rgba(0,0,0,0.5)',
    },
    text_3:{
        fontSize:'11rem',
        fontFamily: 'Roboto-Medium',
        color:'#5C4FA6',
        textDecorationLine: 'underline',
        alignSelf: 'center',
        marginTop: '10rem'
    },
    underlineStyleBase: {
        width: '50rem',
        height: '50rem',
        borderWidth: '0rem',
        borderBottomWidth: '2.5rem',
        fontSize: '24rem',
        color: '#000',
      },
    
      underlineStyleHighLighted: {
        borderColor: "#000000",
      },
})