import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Switch} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Modal from 'react-native-modal';

const height = Dimensions.get('screen').height;
import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('screen').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

import {Header} from '../../components/SubHeader.component';

export const Booking = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [is24, setIs24] = useState(true)

  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);

  const [startTime, setStartTime] = useState(new Date());
  const [startTimeText, setStartTimeText] = useState('00 : 00');
  const [startTime12, setStartTime12] = useState('');

  const [endTime, setEndTime] = useState(new Date());
  const [endTimeText, setEndTimeText] = useState('00 : 00');
  const [endTime12, setEndTime12] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [breakTimeHr, setBreakTimeHr] = useState('00');
  const [breakTimeMin, setBreakTimeMin] = useState('00');
  const [totalTime, setTotalTime] = useState('00 : 00');
  const [totalAmount, setTotalAmount] = useState('00');


  //Display total working hours
  const finalDuration = () => {
    let temp = ''
    let total = moment
      .utc(moment(endTimeText, 'HH:mm').diff(moment(startTimeText, 'HH:mm')))
      .format('HH:mm');
    let _break =
      moment(breakTimeHr, 'HH').format('HH') +
      ':' +
      moment(breakTimeMin, 'mm').format('mm');

    console.log("START : " + startTimeText + " END : " + endTimeText)  

    if (_break > total) {
      let time = '24:00';
      let xyz = moment
        .utc(moment(total, 'HH:mm').diff(moment(_break, 'HH:mm')))
        .format('HH:mm');
      let final = moment
        .utc(moment(time, 'HH:mm').diff(moment(xyz, 'HH:mm')))
        .format('HH:mm');
      setTotalTime('-' + final);
    } else {
      temp = moment.utc(moment(total, 'HH:mm').diff(moment(_break, 'HH:mm'))).format('HH:mm')
      setTotalTime(temp);
    }

    //Caculating Amount work per hour
    let totalWorkingTime = moment(temp, 'HH:mm');
    let convertToArray = moment(totalWorkingTime).toArray();
    let amount =
      parseInt(convertToArray[3] * 100) +
      parseInt(convertToArray[4] * (100 / 60));
    setTotalAmount(total > _break ? amount : '00');
  };

  //OnToggle
  const onToggle = () => {
    setIsToggle(!isToggle);
    setIs24(!is24)

    if (!isToggle == false) {
      console.log("TOGGLE on [24]")
      setStartTime12(moment(startTimeText, 'HH:mm').format('HH:mm'))
      setEndTime12(moment(endTimeText, 'HH:mm').format('HH:mm'))
    } else {
      console.log("TOGGLE on [12]")
      setStartTime12(moment(startTimeText, 'hh:mm').format('hh:mm A'));
      setEndTime12(moment(endTimeText, 'hh:mm').format('hh:mm A'));
    }
  };

  const onConfirmStartTime = (event, time) => {
    // setStartTime(moment(time, "HH:mm").format("HH:mm"))
    // setShowStartTime(false)
    const currentTime = time || startTime;
    setShowStartTime(false);
    setStartTime(currentTime);

    if(is24 == true){
      let temp = new Date(currentTime);
      let start = temp.getHours() + ' : ' + temp.getMinutes();
      setStartTimeText(start);
      console.log("Time -> 24hrs  ", start + " : " + startTimeText)
    } else {
      let hold = ''
      let hold_ = ''
      let temp = new Date(currentTime)
      let start = temp.getHours() + ' : ' + temp.getMinutes();
      hold_ = temp.getHours() + ' : ' + temp.getMinutes();
      hold = moment(start,"hh:mm").format("hh:mm A")
      setStartTime12(hold)
      setStartTimeText(hold_)
      console.log("Time -> 12hrs ", hold + " : " + startTimeText + " newST " + start)
    }
  };

  const onConfirmEndTime = (event, time) => {
    // setEndTime(moment(time, "HH:mm").format("HH:mm"))
    // setShowEndTime(false)
    const currentTime = time || startTime;
    setShowEndTime(false);
    setEndTime(currentTime);

    if(is24 == true){
      let temp = new Date(currentTime);
      let end = temp.getHours() + ' : ' + temp.getMinutes();
      setEndTimeText(end);
      console.log("Time -> 24hrs  ", end + " : " + endTimeText)
    } else {
      let hold = ''
      let hold_ = ''
      let temp = new Date(currentTime)
      let end = temp.getHours() + ' : ' + temp.getMinutes();
      hold_ = temp.getHours() + ' : ' + temp.getMinutes();
      hold = moment(end,"hh:mm").format("hh:mm A")
      setEndTime12(hold)
      setEndTimeText(hold_)
  
      console.log("Time -> 12hrs  ", hold + " ET " + endTimeText + " newET " + end)
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Bookings" />
      <View style={styles.paddingHorizontal}>
        <View style={styles.workContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.label}>Working hours</Text>
            <View style={styles.switchContainer}>
              <Switch
                value={isToggle}
                onValueChange={onToggle}
                color="#5C4FA6"
              />
            </View>
          </View>
          <Text style={styles.workingTime}>
            {totalTime}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.timeContainer}
            onPress={() => setShowStartTime(true)}>
            <Text style={[styles.subLabel, {letterSpacing: 0.5}]}>
              Start at
            </Text>
            <Text style={styles.subTime}>
              {isToggle == false ? startTimeText : startTime12}
            </Text>
          </TouchableOpacity>
          {showStartTime && (
            <DateTimePicker
              // isVisible={showStartTime}
              mode="time"
              onChange={onConfirmStartTime}
              // onCancel={()=> setShowStartTime(false)}
              is24Hour={is24}
              value={startTime}
            />
          )}
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.timeContainer, {marginLeft: 15}]}
            onPress={() => setShowEndTime(true)}>
            <Text style={[styles.subLabel, {letterSpacing: 0.5}]}>End at</Text>
            <Text style={styles.subTime}>
              {isToggle == false ? endTimeText : endTime12}
            </Text>
          </TouchableOpacity>
          {showEndTime && (
            <DateTimePicker
              // isVisible={showEndTime}
              mode="time"
              onChange={onConfirmEndTime}
              // onCancel={()=> setShowEndTime(false)}
              is24Hour={is24}
              value={endTime}
            />
          )}
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.timeContainer}>
            <Text style={[styles.subLabel, {letterSpacing: 0.5}]}>
              Amount per hour
            </Text>
            <Text style={styles.subTime}>{totalAmount}</Text>
          </View>

          <TouchableOpacity
            style={[styles.timeContainer, {marginLeft: 15}]}
            activeOpacity={0.5}
            onPress={() => setShowModal(!showModal)}>
            <Text style={[styles.subLabel, {letterSpacing: 0.5}]}>Break</Text>
            <Text style={styles.subTime}>
              {breakTimeHr} : {breakTimeMin}
            </Text>
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
          onBackdropPress={() => [
            setShowModal(false),
            setBreakTimeHr('00'),
            setBreakTimeMin('00'),
          ]}
          backdropColor={'rgba(0, 0, 0, 0.2)'}
          style={{width: '100%', alignSelf: 'center'}}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalLabel}>Taking a break of</Text>
            <View style={{flexDirection: 'row', marginTop: height * 0.01}}>
              <Text style={[styles.subLabel, {marginLeft: 30}]}>
                {breakTimeHr > 1 ? 'Hrs' : 'Hr'}
              </Text>
              <Text style={[styles.subLabel, {marginLeft: 65}]}>Mins</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.input}>
                <TextInput
                  value={breakTimeHr}
                  onChangeText={value => setBreakTimeHr(value)}
                  style={styles.inputText}
                  maxLength={2}
                  keyboardType="numeric"
                />
              </View>
              <Text style={[styles.inputText]}>:</Text>
              <View style={styles.input}>
                <TextInput
                  value={breakTimeMin}
                  onChangeText={value => setBreakTimeMin(value)}
                  style={styles.inputText}
                  maxLength={2}
                  keyboardType="numeric"
                />
              </View>
              {breakTimeHr > 23 ||
              breakTimeHr == '' ||
              breakTimeHr.length < 2 ||
              breakTimeMin > 59 ||
              breakTimeMin == '' ||
              breakTimeMin.length < 2 ? (
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.disableDoneContainer}>
                  <Text style={[styles.subLabel, {color: 'rgba(0,0,0,0.2)'}]}>
                    Done
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.doneContainer}
                  onPress={() => [setShowModal(false), finalDuration()]}>
                  <Text style={[styles.subLabel, {color: '#fff'}]}>Done</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  paddingHorizontal: {
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
    paddingTop: '15rem',
  },
  modalLabel: {
    fontSize: '16rem',
    fontFamily: 'Roboto-Medium',
    color: '#212121',
    marginTop: height * 0.002,
  },
  input: {
    width: '75rem',
    height: height * 0.1,
    borderWidth: '2.5rem',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#212121',
    borderRadius: '2.5rem',
    marginTop: height * -0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: '36rem',
    fontFamily: 'Roboto-Medium',
    color: '#212121',
  },
  doneContainer: {
    width: '100rem',
    height: height * 0.05,
    borderRadius: '25rem',
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.04,
    marginLeft: '15rem',
  },
  disableDoneContainer: {
    width: '100rem',
    height: height * 0.05,
    borderRadius: '25rem',
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.04,
    marginLeft: '15rem',
  },
  errorText: {
    fontSize: '12rem',
    fontFamily: 'Roboto-Regular',
    color: '#f01818',
  },
});
