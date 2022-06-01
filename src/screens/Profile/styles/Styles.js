import {Dimensions} from 'react-native'
import {COLORS} from "../../../constants/Colors"
import {FONTS} from "../../../constants/Fonts"

const height = Dimensions.get('screen').height
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});


export const styles = EStyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.BG,
    },
    headerContainer:{
        flexDirection: 'row',
        paddingTop: height * 0.03,
        paddingHorizontal: '20rem',
    },
    bodyContainer:{
        paddingHorizontal: '20rem',
        marginTop: height * 0.05
    },
    left:{
        m15: {marginLeft: '15rem'},
        m20: {marginLeft: '20rem'}
    },
    text:{
        fontSize: '14rem',
        fontFamily: FONTS.REGULAR,
        fontWeight: '500',
        color: COLORS.BLACK55
    },
    label:{
        fontSize: '14rem',
        fontFamily: FONTS.MEDIUM,
        fontWeight: '500',
        color: COLORS.BLACK33
    },
    subLabel:{
        fontSize: '13rem',
        fontFamily: FONTS.REGULAR,
        fontWeight: '100',
        color: COLORS.BLACK66, 
    },
    cardContainer:{
        height: height * 0.15,
        borderRadius: '10rem',
        elevation: '2.5rem',
        backgroundColor: COLORS.WHITEFC,
        marginTop: height * 0.02,
        paddingLeft: '10rem',
        paddingTop: height * 0.013
    },
    cardContainer_2:{
        height: height * 0.2,
        borderRadius: '10rem',
        elevation: '2.5rem',
        backgroundColor: COLORS.WHITEFC,
        marginTop: height * 0.02,
        paddingLeft: '10rem',
        paddingTop: height * 0.013
    },
    dropDownContainer: {
        width: '100rem',
        height: height * 0.10,
        backgroundColor: COLORS.WHITE,
        borderRadius: '10rem',
        paddingHorizontal: '5rem',
        marginTop: height * -(0.02),
        marginLeft: '240rem',
        paddingTop: height * 0.003
      },
    dropDownText: {
        fontSize: '12rem',
        fontFamily: FONTS.MEDIUM,
        color: COLORS.BLACK66,
      },
    
    //Update Profile
    updateProfileContainer:{
        paddingHorizontal: '20rem',
        marginTop: height * 0.015
    },
    inputText:{
        fontSize: '12rem',
        fontFamily: FONTS.REGULAR
    },
    dobContainer:{
        width: '100%',
        height: height * 0.065,
        borderRadius: '2.5rem',
        borderColor: COLORS.PRIMARY,
        borderWidth: '1rem',
        marginTop: height * 0.025,
        paddingLeft: '10rem',
        justifyContent: 'center'
    } 
})