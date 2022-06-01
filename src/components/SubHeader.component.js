import React from "react";
import {Dimensions, Text, View, TouchableOpacity} from 'react-native'
import Dot from "../../assets/images/threeDot.svg"
import Back from "../../assets/images/back.svg"
import {COLORS} from "../constants/Colors"
import {FONTS} from "../constants/Fonts"

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});


export const Header = ({title, dot, onFunction, back, onBack}) => {
    return(
        <View style={styles.headerContainer}>
            <TouchableOpacity activeOpacity={0.5} style={styles.backRight} onPress={()=> onBack()}>
                {back ? <Back/> : null}
            </TouchableOpacity>
            <Text style={styles.titleText}>{title}</Text>
            <TouchableOpacity activeOpacity={0.5} style={styles.dotLeft} onPress={()=> onFunction()}>
                {dot ? <Dot/> : null}
            </TouchableOpacity>
        </View>
    )
}

const styles = EStyleSheet.create({
    headerContainer:{
        width: '100%',
        height: '50rem',
        backgroundColor: COLORS.PRIMARY,
        alignItems: 'center',
        justifyContent: 'flex-end',
        top: '0rem',
        flexDirection: 'row',
        paddingHorizontal: "20rem"
    },
    titleText:{
        fontSize:'14.5rem',
        fontFamily: FONTS.REGULAR,
        color: COLORS.WHITE,
        marginRight: "115rem"
    },
    backRight:{
        marginRight: '105rem'
    }
})