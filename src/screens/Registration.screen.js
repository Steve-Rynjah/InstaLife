import React, {useState} from 'react';
import {
  Dimensions,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modal';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Menu, MenuItem} from 'react-native-material-menu';

const height = Dimensions.get('screen').height;

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

import Logo from '../../assets/images/Small_Logo.svg';
import {Button} from '../components/Button.component';
import {DisableButton} from '../components/DisableButton.component';

export const Registration = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [input, setInput] = useState('');
  const [modal, setModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [otp, setOtp] = useState('');
  const [err, setErr] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const hideMenu = () => setDropDown(false);
  const showMenu = () => setDropDown(true);

  const otpCheck = () => {
    {
      otp == '9452'
        ? [
            navigation.navigate('TabNav'),
            setInput(''),
            setOtp(''),
            setModal(false),
          ]
        : setErr(true);
    }
  };

  const onChangeLang = async lang => {
    i18n.changeLanguage(lang);
    try {
      await AsyncStorage.setItem('@APP:languageCode', lang);
    } catch (err) {
      console.log(err);
    }
    console.log(i18n.dir());
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAwareScrollView bounces={false}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Logo />
            <Menu
              visible={dropDown}
              anchor={
                <Text onPress={showMenu} style={styles.selectText}>
                  {t('SelectLang')}
                </Text>
              }
              onRequestClose={hideMenu}
              style={styles.dropDownContainer}>
              <MenuItem
                onPress={() => [onChangeLang('en'), setDropDown(false)]}
                textStyle={[styles.subSelectText, {marginTop: height * -0.01}]}>
                English
              </MenuItem>
              <MenuItem
                onPress={() => [onChangeLang('fr'), setDropDown(false)]}
                textStyle={[styles.subSelectText, {marginTop: height * -0.03}]}>
                France
              </MenuItem>
            </Menu>
          </View>
          <View style={{marginTop: height * 0.15}}>
            <Text style={i18n.language === 'en' ? styles.label : styles.label_}>
              {t('Enter')}
            </Text>
            <Text style={i18n.language === 'en' ? styles.text : styles.text_}>
              {t('WeWill')}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 50,
                alignItems: 'center',
              }}>
              <Text style={styles.label}>+91</Text>
              <View style={styles.input}>
                <TextInput
                  value={input}
                  onChangeText={value => setInput(value)}
                  style={[styles.textInput, {letterSpacing: 2.5}]}
                  keyboardType="number-pad"
                  maxLength={10}
                />
              </View>
            </View>

            {input.length > 9 ? (
              <TouchableOpacity
                onPress={() => setModal(true)}
                activeOpacity={0.5}
                style={{marginTop: height * 0.2, alignSelf: 'center'}}>
                <Button text={t('Continue')} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.9}
                style={{marginTop: height * 0.2, alignSelf: 'center'}}>
                <DisableButton text={t('Continue')} />
              </TouchableOpacity>
            )}
          </View>

          <Modal
            useNativeDriver={true}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            isVisible={modal}
            coverScreen
            hasBackdrop
            animationInTiming={500}
            animationOutTiming={500}
            onBackdropPress={() => [
              setModal(!modal),
              setIsLogin(false),
              setErr(false),
            ]}
            backdropColor={'rgba(0, 0, 0, 0.7)'}
            style={{width: '100%', alignSelf: 'center'}}>
            <View style={styles.modalContainer}>
              {!isLogin ? (
                <View style={styles.modalContainerHeader}>
                  <Text style={styles.text_1}>{t('Paste')}</Text>
                  <Text style={[styles.text_2, {letterSpacing: 2.5}]}>
                    9452
                  </Text>
                </View>
              ) : null}
              <View style={{paddingHorizontal: 20}}>
                <OTPInputView
                  style={{
                    width: '100%',
                    height: height * 0.02,
                    marginTop: height * 0.08,
                    alignSelf: 'center',
                  }}
                  pinCount={4}
                  autoFocusOnLoad
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  onCodeFilled={code => {
                    setOtp(code);
                    setIsLogin(true);
                  }}
                />
                {!err ? (
                  <Text
                    style={[
                      i18n.language === 'en' ? styles.text_1 : styles.text_11,
                      {marginTop: height * 0.06},
                    ]}>
                    {t('PleaseEnter')}
                  </Text>
                ) : (
                  <Text
                    style={[
                      styles.text_1,
                      {marginTop: height * 0.06, color: '#E83330'},
                    ]}>
                    {t('WrongCode')}
                  </Text>
                )}
                {isLogin ? (
                  <>
                    <TouchableOpacity
                      onPress={otpCheck}
                      activeOpacity={0.5}
                      style={{marginTop: height * 0.03, alignSelf: 'center'}}>
                      <Button text={t('Login')} />
                    </TouchableOpacity>
                    <Text style={styles.text_3}>{t('Resend')}</Text>
                  </>
                ) : null}
              </View>
            </View>
          </Modal>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: height * 0.04,
    paddingHorizontal: '30rem',
  },
  label: {
    fontSize: '37rem',
    fontFamily: 'Roboto-Medium',
    color: '#212121',
    lineHeight: height * 0.07,
  },
  label_: {
    fontSize: '35.5rem',
    fontFamily: 'Roboto-Medium',
    color: '#212121',
    lineHeight: height * 0.07,
  },
  text: {
    fontSize: '17rem',
    fontFamily: 'Roboto-Medium',
    color: '#212121',
    marginTop: '30rem',
    lineHeight: height * 0.04,
  },
  text_: {
    fontSize: '14rem',
    fontFamily: 'Roboto-Medium',
    color: '#212121',
    marginTop: '30rem',
    lineHeight: height * 0.04,
  },
  selectText: {
    fontSize: '12rem',
    fontFamily: 'Roboto-Regular',
    color: '#212121',
    marginLeft: '75rem',
  },
  subSelectText: {
    fontSize: '12rem',
    fontFamily: 'Roboto-Medium',
    color: '#212121',
  },
  input: {
    width: '225rem',
    height: height * 0.07,
    borderWidth: '1rem',
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: '5rem',
    backgroundColor: '#fff',
    marginLeft: '10rem',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: '28rem',
    color: 'rgba(0,0,0,0.5)',
    fontFamily: 'Roboto-Regular',
    position: 'absolute',
    marginLeft: '5rem',
  },
  modalContainer: {
    width: '100%',
    height: height * 0.37,
    borderTopLeftRadius: '15rem',
    borderTopRightRadius: '15rem',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: height * -0.03,
  },
  modalContainerHeader: {
    height: height * 0.12,
    backgroundColor: '#F5F7F7',
    borderTopLeftRadius: '15rem',
    borderTopRightRadius: '15rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_1: {
    fontSize: '14rem',
    fontFamily: 'Roboto-Medium',
    color: 'rgba(0,0,0,0.3)',
  },
  text_11: {
    fontSize: '12rem',
    fontFamily: 'Roboto-Medium',
    color: 'rgba(0,0,0,0.3)',
  },
  text_2: {
    fontSize: '22rem',
    fontFamily: 'Roboto-Medium',
    color: 'rgba(0,0,0,0.5)',
  },
  text_3: {
    fontSize: '11rem',
    fontFamily: 'Roboto-Medium',
    color: '#5C4FA6',
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginTop: height * 0.01,
  },
  underlineStyleBase: {
    width: '50rem',
    height: height * 0.08,
    borderWidth: '0rem',
    borderBottomWidth: '2.5rem',
    fontSize: '24rem',
    color: '#000',
  },

  underlineStyleHighLighted: {
    borderColor: '#000000',
  },

  dropDownContainer: {
    width: '125rem',
    height: height * 0.12,
    backgroundColor: '#FFF',
    borderRadius: '10rem',
    paddingHorizontal: '5rem',
    paddingTop: height * 0.00001,
    marginTop: height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
