import React,{useState, useEffect} from "react"
import {Dimensions, View, Text, ScrollView, TouchableOpacity} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {Header} from '../../../components/SubHeader.component';
import {styles} from '../styles/Styles'
import {TextInput, RadioButton} from 'react-native-paper'
import {COLORS} from '../../../constants/Colors'

const height = Dimensions.get('screen').height

export const UpdateProfile = ({navigation}) => {
    const [userId, setUserId] = useState('')
    const [email, setEmail] = useState('')
    const [altContact, setAltContact] = useState('')
    const [dob, setDob] = useState(new Date())
    const [dobText, setDobText] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [gender, setGender] = useState(null)
    const [resState, setResState] = useState('')
    const [resAddress, setResAddress] = useState('')
    const [resCity, setResCity] = useState('')
    const [assignState, setAssignState] = useState('')
    const [assignCity, setAssignCity] = useState('')
    const [assignLocation, setAssignLocation] = useState('')
    const [assignRadius, setAssignRadius] = useState('')
    const [proofType, setProofType] = useState('') 

    useEffect(()=>{
        console.log("NNN", dobText)
    },[dobText])

    const onDateChange = (event, time) => {
        const currentDate = time || dob;
        setShowModal(false)
        setDob(currentDate);
    
        let temp = new Date(currentDate);
        let date = temp.getDate() + ' / ' + temp.getMonth() + ' / ' + temp.getFullYear()
        setDobText(date)
      }

    return(
        <View style={styles.container}>
            <Header title="Update Profile" back onBack={()=> navigation.goBack()}/>
            <ScrollView bounces={false}  showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: height * 0.03}}>
                <View style={styles.updateProfileContainer}>
                    <TextInput
                        value={userId}
                        onChangeText={(value)=> setUserId(value)}
                        mode='outlined'
                        label="User Name"
                        outlineColor={COLORS.PRIMARY}
                        activeOutlineColor={COLORS.PRIMARY}
                        theme={{colors:{text: COLORS.BLACK66, placeholder: COLORS.BLACK99}}}
                        style={styles.inputText}
                    />

                    <TextInput
                        value={email}
                        onChangeText={(value)=> setEmail(value)}
                        mode='outlined'
                        label="Email"
                        outlineColor={COLORS.PRIMARY}
                        activeOutlineColor={COLORS.PRIMARY}
                        theme={{colors:{text: COLORS.BLACK66, placeholder: COLORS.BLACK99}}}
                        style={[styles.inputText, {marginTop: height * 0.015}]}
                    />

                    {/*---------------------------------------------------------------------------*/}

                    <Text style={[styles.label, {marginTop: height * 0.025}]}>Other Basic Details</Text>
                    <TextInput
                        value={altContact}
                        onChangeText={(value)=> setAltContact(value)}
                        mode='outlined'
                        label="Alternate Contact No"
                        outlineColor={COLORS.PRIMARY}
                        activeOutlineColor={COLORS.PRIMARY}
                        theme={{colors:{text: COLORS.BLACK66, placeholder: COLORS.BLACK99}}}
                        style={[styles.inputText, {marginTop: height * 0.015}]}
                    />

                    <TouchableOpacity activeOpacity={0.5} style={styles.dobContainer} onPress={()=> setShowModal(true)}>
                        <Text style={[styles.inputText, {color: COLORS.BLACK99}]}>{dobText == '' ? 'Date Of Birth' : <Text style={[styles.inputText, {color: COLORS.BLACK66}]}> {dobText} </Text>}</Text>
                    </TouchableOpacity>
                    {showModal && (
                        <DateTimePicker
                            mode="date"
                            value={dob}
                            onChange={onDateChange}
                        />
                    )}

                    <View style={[styles.dobContainer, {flexDirection: 'row', alignItems: 'center' , justifyContent: null}]}>
                        <Text style={[styles.inputText, {color: COLORS.BLACK99}]}>Gender : </Text>
                        <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={[styles.inputText, {color: COLORS.BLACK66, marginLeft: 10}]}>Male</Text>
                                    <RadioButton value="Male" color={COLORS.PRIMARY}/>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={[styles.inputText, {color: COLORS.BLACK66, marginLeft: 10}]}>Female</Text>
                                    <RadioButton value="Female" color={COLORS.PRIMARY}/>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={[styles.inputText, {color: COLORS.BLACK66, marginLeft: 10}]}>Others</Text>
                                    <RadioButton value="Others" color={COLORS.PRIMARY}/>
                                </View>
                            </View>
                        </RadioButton.Group>
                    </View>

                    {/*---------------------------------------------------------------------------*/}

                    <Text style={[styles.label, {marginTop: height * 0.025}]}>Residential Address</Text>
                    <TextInput
                        value={resState}
                        onChangeText={(value)=> setResState(value)}
                        mode='outlined'
                        label="State"
                        outlineColor={COLORS.PRIMARY}
                        activeOutlineColor={COLORS.PRIMARY}
                        theme={{colors:{text: COLORS.BLACK66, placeholder: COLORS.BLACK99}}}
                        style={[styles.inputText, {marginTop: height * 0.015}]}
                    />

                    <TextInput
                        value={resCity}
                        onChangeText={(value)=> setResCity(value)}
                        mode='outlined'
                        label="City"
                        outlineColor={COLORS.PRIMARY}
                        activeOutlineColor={COLORS.PRIMARY}
                        theme={{colors:{text: COLORS.BLACK66, placeholder: COLORS.BLACK99}}}
                        style={[styles.inputText, {marginTop: height * 0.015}]}
                    />

                    <TextInput
                        value={resAddress}
                        onChangeText={(value)=> setResAddress(value)}
                        mode='outlined'
                        label="Address"
                        outlineColor={COLORS.PRIMARY}
                        activeOutlineColor={COLORS.PRIMARY}
                        theme={{colors:{text: COLORS.BLACK66, placeholder: COLORS.BLACK99}}}
                        style={[styles.inputText, {marginTop: height * 0.015}]}
                    />

                    {/*---------------------------------------------------------------------------*/}

                    <Text style={[styles.label, {marginTop: height * 0.025}]}>Assigned Location</Text>
                    <TextInput
                        value={assignState}
                        onChangeText={(value)=> setAssignState(value)}
                        mode='outlined'
                        label="State"
                        outlineColor={COLORS.PRIMARY}
                        activeOutlineColor={COLORS.PRIMARY}
                        theme={{colors:{text: COLORS.BLACK66, placeholder: COLORS.BLACK99}}}
                        style={[styles.inputText, {marginTop: height * 0.015}]}
                    />

                    <TextInput
                        value={assignCity}
                        onChangeText={(value)=> setAssignCity(value)}
                        mode='outlined'
                        label="City"
                        outlineColor={COLORS.PRIMARY}
                        activeOutlineColor={COLORS.PRIMARY}
                        theme={{colors:{text: COLORS.BLACK66, placeholder: COLORS.BLACK99}}}
                        style={[styles.inputText, {marginTop: height * 0.015}]}
                    />

                    <TextInput
                        value={assignLocation}
                        onChangeText={(value)=> setAssignLocation(value)}
                        mode='outlined'
                        label="Location"
                        outlineColor={COLORS.PRIMARY}
                        activeOutlineColor={COLORS.PRIMARY}
                        theme={{colors:{text: COLORS.BLACK66, placeholder: COLORS.BLACK99}}}
                        style={[styles.inputText, {marginTop: height * 0.015}]}
                    />

                    <TextInput
                        value={assignRadius}
                        onChangeText={(value)=> setAssignRadius(value)}
                        mode='outlined'
                        label="Radius (distance)"
                        outlineColor={COLORS.PRIMARY}
                        activeOutlineColor={COLORS.PRIMARY}
                        theme={{colors:{text: COLORS.BLACK66, placeholder: COLORS.BLACK99}}}
                        style={[styles.inputText, {marginTop: height * 0.015}]}
                    />

                    {/*---------------------------------------------------------------------------*/}

                    <Text style={[styles.label, {marginTop: height * 0.025}]}>ID Proof</Text>
                    <TextInput
                        value={proofType}
                        onChangeText={(value)=> setProofType(value)}
                        mode='outlined'
                        label="Proof Type"
                        outlineColor={COLORS.PRIMARY}
                        activeOutlineColor={COLORS.PRIMARY}
                        theme={{colors:{text: COLORS.BLACK66, placeholder: COLORS.BLACK99}}}
                        style={[styles.inputText, {marginTop: height * 0.015}]}
                    />

                </View>
            </ScrollView>
        </View>
    )
}