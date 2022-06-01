import React,{useState} from "react";
import {Dimensions, View, Text, ScrollView} from 'react-native'
import {Header} from '../../../components/SubHeader.component';
import {styles} from '../styles/Styles'
import {ROUTE_NAMES} from '../../../constants/routeNames'

import MyProfile from "../../../../assets/images/My_Profile.svg"
import IdCard from "../../../../assets/images/id_card.svg"
import Email from "../../../../assets/images/email.svg"
import Phone from "../../../../assets/images/phone.svg"

import {Menu, MenuItem} from 'react-native-material-menu';
const height = Dimensions.get('screen').height

export const Profile = ({navigation}) => {
    const [dropDown, setDropDown] = useState(false)

    return(
        <View style={styles.container}>
            <Header title="My Profile" dot onFunction={()=> setDropDown(true)}/>
            <Menu
              visible={dropDown}
              onRequestClose={()=> setDropDown(false)}
              style={styles.dropDownContainer}>
                <MenuItem
                    onPress={() => [setDropDown(false), navigation.navigate(ROUTE_NAMES.UPDATE_PROFILE)]}
                    textStyle={[styles.dropDownText, {marginTop: height * -0.01}]}>
                    Edit
                </MenuItem>
                <MenuItem
                    onPress={() => [setDropDown(false)]}
                    textStyle={[styles.dropDownText, {marginTop: height * -0.03}]}>
                    Logout
                </MenuItem>
            </Menu>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: height * 0.09}}>
                <View style={styles.headerContainer}>
                    <MyProfile/>
                    <View style={[{flexDirection: 'column', justifyContent: 'center'}, styles.left.m20]}>
                        <View style={[{flexDirection: 'row'}]}>
                            <IdCard/>
                            <Text style={[styles.text, styles.left.m15]}>Katherine</Text>
                        </View>
                        <View style={[{flexDirection: 'row', marginTop: height * 0.015}]}>
                            <Email/>
                            <Text style={[styles.text, styles.left.m15]} numberOfLines={1}>katherine@gmail.com</Text>
                        </View>
                        <View style={[{flexDirection: 'row', marginTop: height * 0.015}]}>
                            <Phone/>
                            <Text style={[styles.text, styles.left.m15]}>+91 8844557748</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.bodyContainer}>
                    <Text style={styles.label}>Other Basic Details</Text>
                    <View style={styles.cardContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.subLabel}>Alternate Contact No : </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: height * 0.02}}>
                            <Text style={styles.subLabel}>Date Of Birth : </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: height * 0.02}}>
                            <Text style={styles.subLabel}>Gender : </Text>
                        </View>
                    </View>

                    <Text style={[styles.label, {marginTop: height * 0.025}]}>Residential Address</Text>
                    <View style={styles.cardContainer_2}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.subLabel}>State : </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: height * 0.02}}>
                            <Text style={styles.subLabel}>City : </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: height * 0.02}}>
                            <Text style={styles.subLabel}>Address : </Text>
                        </View>
                    </View>

                    <Text style={[styles.label, {marginTop: height * 0.025}]}>Assigned Location</Text>
                    <View style={styles.cardContainer_2}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.subLabel}>State : </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: height * 0.02}}>
                            <Text style={styles.subLabel}>City : </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: height * 0.02}}>
                            <Text style={styles.subLabel}>Assigned Location : </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: height * 0.02}}>
                            <Text style={styles.subLabel}>Radius (distance) : </Text>
                        </View>
                    </View>

                    <Text style={[styles.label, {marginTop: height * 0.025}]}>ID Proof</Text>
                    <View style={styles.cardContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.subLabel}>Proof Type : </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: height * 0.02}}>
                            <Text style={styles.subLabel}>Document : </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
