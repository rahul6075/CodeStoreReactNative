import {
  View,
  Text,
  TextInput,
  Platform,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './AddUpdateProfileStyle';
import {UploadIcon, CalenderIcon} from '../../assets';
import {Button, ButtonOutlined} from '../../components';

const AddUpdateProfile = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState<boolean>(false);
  const [dateInput, setDateInput] = useState<string>();

  const onChnangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android' || Platform.OS === 'ios');
    setDate(currentDate);
    const tempDate = new Date(currentDate);
    let formattedDate =
      tempDate.getDate() +
      '-' +
      (tempDate.getMonth() + 1) +
      '-' +
      tempDate.getFullYear();
    setDateInput(formattedDate);
  };
  const openDatePicker = (show:boolean) =>{
      showMode('date')
  }
  const showMode = (currMode: 'date' | 'time') => {
    setMode(currMode);
    setShow(true)
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Create Your Profile</Text>
        <View style={styles.avatarImg}>
          <View style={styles.uploadIcon}>
            <UploadIcon width={30} height={30} />
          </View>
          <Text>Upload Image</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formElement}>
            <Text style={styles.label}>Company Name</Text>
            <View style={styles.formInput}>
              <TextInput  style={styles.InputEle} placeholder="eg. cloudshine Media Pvt. Ltd" />
            </View>
          </View>
          <View style={styles.formElement}>
            <Text style={styles.label}>Founded Date</Text>
            <TouchableOpacity
              style={[styles.formInput, styles.datePicker]}
              onPress={() => openDatePicker}>
              <TextInput  style={styles.InputEle} placeholder="Date" value={dateInput} />
              <CalenderIcon width={40} height={30} />
            </TouchableOpacity>
            {!show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChnangeDate}
              />
            )}
          </View>

          <View style={styles.formElement}>
            <Text style={styles.label}>About Company </Text>
            <View style={styles.formInput}>
              <TextInput
               style={styles.InputEle}
                placeholder="Description"
                multiline={true}
                numberOfLines={2}
              />
            </View>
          </View>
          <View style={[styles.formElement, styles.butttonElements]}>
            <View style={styles.btnWidth}>
              <ButtonOutlined content={'Cancel'} />
            </View>
            <View style={styles.btnWidth}>
              <Button content={'Save'} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddUpdateProfile;
