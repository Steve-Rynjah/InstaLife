import React, {useLayoutEffect, useState} from 'react';
import {Dimensions, View, Text, TouchableOpacity, TextInput, ToastAndroid} from 'react-native';
import {Switch} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Modal from 'react-native-modal';

const height = Dimensions.get('screen').height;
import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

export const Booking = ({navigation}) => {
  const [is24, setIs24] = useState(false)
  const [isToggle, setIsToggle] = useState(false);

  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);

  const [startTime, setStartTime] = useState('00 : 00');
  const [endTime, setEndTime] = useState('00 : 00');

  const [showModal, setShowModal] = useState(false);
  const [breakTimeHr, setBreakTimeHr] = useState('00');
  const [breakTimeMin, setBreakTimeMin] = useState('00');
  const [totalTime, setTotalTime] = useState('00 : 00');
  const [perWeek, setPerWeek] = useState('00 : 00')

  const toggleShowEndTime = () => setShowEndTime(true);
  const toggleHideEndTime = () => setShowEndTime(false);
 
// To calculate after pressing feeding break duration
  const finalDuration = () => {
    let start = startTime;
    let end = endTime;
    let hrWorkPerWeek = '22:00'
    let total = moment.utc(moment(end,"HH:mm").diff(moment(start,"HH:mm"))).format("HH:mm") //7:30 - 10:30
    let totalBreak = (moment(breakTimeHr,"HH")).format("HH") + ':' + (moment(breakTimeMin,"mm")).format("mm") //01:00
    
    if(totalBreak>total){
      let time = '24:00'
      let xyz = moment.utc((moment(total,"HH:mm")).diff(moment(totalBreak,"HH:mm"))).format("HH:mm") //03:00 - 04:00
      let final = moment.utc((moment(time,"HH:mm")).diff(moment(xyz,"HH:mm"))).format("HH:mm") //24:00 - 23:00
      setTotalTime('-' + final)
      console.log('FINAL',final)
    } else{
      let xyz = moment.utc((moment(total,"HH:mm")).diff(moment(totalBreak,"HH:mm"))).format("HH:mm") //03:00 - 01:00
      setTotalTime(xyz)
    }

      let abc = moment.utc((moment(hrWorkPerWeek,"HH:mm")).diff(moment(totalBreak,"HH:mm"))).format("HH:mm") //25:00 - 01:00
      setPerWeek(abc)

  }

  //Header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {backgroundColor: '#5C4FA6'},
      headerTitleAlign: 'center',
      headerTitle: () => (
        <View>
          <Text style={styles.header}>Bookings</Text>
        </View>
      ),
    })

    let br = '02:00'
    var d1 = new Date("08/14/2020 00:00");  //24hrs
    var d2 = new Date("08/15/2020 16:30"); //16hrs adding hours
    // // d1.setHours(2); //subtracting hours
    var d3 = d2.getTime() - d1.getTime();
    var daydiff = d3 / (1000 * 60 * 60);
    let convert = d2.toLocaleTimeString() - d1.toLocaleTimeString()

    console.log('///', daydiff - parseInt(br))
 
  }, [navigation, is24]);

  const onConfirmStartTime = time => {
    setStartTime(moment(time, "HH:mm").format("LT"))
    setShowStartTime(false)
  };

  const onConfirmEndTime = time => {
        setEndTime(moment(time, "HH:mm").format("LT"))
        toggleHideEndTime()
  };

  return (
    <View style={styles.container}>
      <View style={styles.workContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.label}>Working hours</Text>
          <View style={styles.switchContainer}>
            <Switch
              value={isToggle}
              onValueChange={()=> [ setIsToggle(!isToggle), setIs24(!is24)]}
              color="#5C4FA6"
            />
          </View>
        </View>
        <Text style={styles.workingTime}>{totalTime}<Text style={styles.subTime}></Text></Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.timeContainer}
          onPress={() => setShowStartTime(true)}>
          <Text style={[styles.subLabel, {letterSpacing: 0.5}]}>Start at</Text>
          <Text style={styles.subTime}>{startTime}</Text>
        </TouchableOpacity>
        {showStartTime && (
          <DateTimePickerModal
            isVisible={showStartTime}
            mode="time"
            onConfirm={onConfirmStartTime}
            onCancel={()=> setShowStartTime(false)}
            is24Hour={is24}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.timeContainer, {marginLeft: 15}]}
          onPress={() => [toggleShowEndTime()]}>
          <Text style={[styles.subLabel, {letterSpacing: 0.5}]}>End at</Text>
          <Text style={styles.subTime}>{endTime}</Text>
        </TouchableOpacity>
        {showEndTime && (
          <DateTimePickerModal
            isVisible={showEndTime}
            mode="time"
            onConfirm={onConfirmEndTime}
            onCancel={toggleHideEndTime}
            is24Hour={is24}
          />
        )}
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.timeContainer}>
          <Text style={[styles.subLabel, {letterSpacing: 0.5}]}>
            Hrs work per week
          </Text>
              <Text style={styles.subTime}>{perWeek}</Text>
        </View>

        <TouchableOpacity
          style={[styles.timeContainer, {marginLeft: 15}]}
          activeOpacity={0.5}
          onPress={() => setShowModal(!showModal)}>
          <Text style={[styles.subLabel, {letterSpacing: 0.5}]}>
            Break
          </Text>
              <Text style={styles.subTime}>{breakTimeHr} : {breakTimeMin}</Text>
        </TouchableOpacity>
      </View>

      <Modal
        useNativeDriver={true}
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={showModal}
        coverScreen
        hasBackdrop
        animationInTiming={500}
        animationOutTiming={500}
        onBackdropPress={() => [setShowModal(false), setBreakTimeHr('00'), setBreakTimeMin('00')]}
        backdropColor={'rgba(0, 0, 0, 0.2)'}
        style={{width: '100%', alignSelf: 'center'}}>
        <View style={styles.modalContainer}>
            <Text style={styles.modalLabel}>Taking a break of</Text>
            <View style={{flexDirection: 'row', marginTop: height * 0.01}}>
                <Text style={[styles.subLabel, {marginLeft: 30}]}>{breakTimeHr>1 ? 'Hrs' : 'Hr'}</Text>
                <Text style={[styles.subLabel, {marginLeft: 65}]}>Mins</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.input}>
                    <TextInput
                        value={breakTimeHr}
                        onChangeText={(value)=> setBreakTimeHr(value)}
                        style={styles.inputText}
                        maxLength={2}
                        keyboardType='numeric'
                        />
                </View>
                <Text style={[styles.inputText]}>:</Text>
                <View style={styles.input}>
                    <TextInput
                        value={breakTimeMin}
                        onChangeText={(value)=> setBreakTimeMin(value)}
                        style={styles.inputText}
                        maxLength={2}
                        keyboardType='numeric'
                        />
                </View>
                {breakTimeHr>23 || breakTimeHr == '' || breakTimeHr.length<2 || breakTimeMin>59 || breakTimeMin == '' || breakTimeMin.length<2   ? (
                    <TouchableOpacity activeOpacity={0.5} style={styles.disableDoneContainer}>
                        <Text style={[styles.subLabel, {color: 'rgba(0,0,0,0.2)'}]}>Done</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity activeOpacity={0.5} style={styles.doneContainer} onPress={()=> [setShowModal(false), finalDuration()]}>
                        <Text style={[styles.subLabel, {color: '#fff'}]}>Done</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: '15rem',
  },
  workContainer: {
    width: '100%',
    height: height * 0.2, //'185rem',
    borderRadius: '15rem',
    backgroundColor: '#FFFFFF',
    elevation: '1.5rem',
    alignSelf: 'center',
    marginTop: height * 0.02,
    paddingLeft: '20rem',
    paddingTop: '20rem',
  },
  timeContainer: {
    width: '47.5%',
    height: height * 0.09,
    borderRadius: '10rem',
    backgroundColor: '#EBE8FA',
    alignSelf: 'center',
    marginTop: height * 0.02,
    paddingLeft: '20rem',
    paddingTop: '10rem',
  },
  breakContainer: {
    width: '55%',
    height: height * 0.09,
    borderRadius: '10rem',
    backgroundColor: '#EBE8FA',
    alignSelf: 'center',
    marginTop: height * 0.02,
    paddingLeft: '20rem',
    paddingTop: '10rem',
  },
  label: {
    fontSize: '16rem',
    fontFamily: 'Roboto-Regular',
    color: '#212121',
  },
  workingTime: {
    fontSize: '48rem',
    fontFamily: 'Roboto-Medium',
    color: '#212121',
    fontWeight: 'bold',
    marginTop: height * 0.02,
  },
  subLabel: {
    fontSize: '12rem',
    fontFamily: 'Roboto-Regular',
    color: '#212121',
  },
  subTime: {
    fontSize: '20rem',
    fontFamily: 'Roboto-Medium',
    color: '#212121',
    fontWeight: 'bold',
    marginTop: height * 0.002,
  },
  switchContainer: {
    width: '50rem',
    height: height * 0.035,
    borderRadius: '25rem',
    backgroundColor: '#EBE8FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '150rem',
  },

  modalContainer: {
    width: '80%',
    height: height * 0.2,
    backgroundColor: '#fff',
    borderRadius: '15rem',
    alignSelf: 'center',
    paddingLeft: '15rem',
    paddingTop: '15rem'
  },
  modalLabel:{
    fontSize: '16rem',
    fontFamily: 'Roboto-Medium',
    color: '#212121',
    marginTop: height * 0.002,
  },
  input:{
      width: '75rem',
      height: height * 0.1,
      borderWidth: '2.5rem',
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: '#212121',
      borderRadius: '2.5rem',
      marginTop: height * (-0.01),
      justifyContent: 'center',
      alignItems: 'center',
  },
  inputText:{
    fontSize: '36rem',
    fontFamily: 'Roboto-Medium',
    color: '#212121',
  },
  doneContainer:{
      width: '100rem',
      height: height * 0.05,
      borderRadius: '25rem',
      backgroundColor: '#212121',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: height * 0.04,
      marginLeft: '15rem'
  },
  disableDoneContainer:{
    width: '100rem',
    height: height * 0.05,
    borderRadius: '25rem',
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.04,
    marginLeft: '15rem'
},
errorText:{
  fontSize: '12rem',
  fontFamily: 'Roboto-Regular',
  color: '#f01818'
}

});
