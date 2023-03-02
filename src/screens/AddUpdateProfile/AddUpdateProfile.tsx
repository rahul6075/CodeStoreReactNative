import {
  View,
  Text,
  TextInput,
  Platform,
  Pressable,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import styles from './AddUpdateProfileStyle';
import {UploadIcon, CalenderIcon} from '../../assets';
import {Button, ButtonOutlined} from '../../components';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddUpdateProfile = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [dateInput, setDateInut] = useState<string>();
  const [mode, setMode] = useState<any>('date');
  const [show, setShow] = useState<boolean>(false);
  const [file, setFile] = useState<any>(null);
  const onChange = (selectedDate: Date) => {
    const currDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currDate);
    let tempDate = new Date(currDate);
    let formattedDate =
      tempDate.getDay() +
      '-' +
      tempDate.getMonth() +
      '-' +
      tempDate.getFullYear();
    setDateInut(formattedDate);
  };
  const showMode = (currMode: string) => {
    setShow(true);
    setMode(currMode);
  };

  let options = {
    mediaType: 'photo',
    quality: 1,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const chooseFile = () => {
    ImagePicker.launchImageLibrary(options, function (result) {
      if (result.didCancel) {
        console.log('User cancelled image picker');
      } else if (result.errorMessage) {
        console.log(
          'ImagePicker Error: ',
          result.errorMessage + ' ' + result.errorCode,
        );
      } else {
        setFile(result.assets);
      }
    });
  };

  const onPress = () => {};

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Create Your Profile</Text>
        <View style={styles.photoContainer}>
          <View style={styles.avatar}>
            <Pressable style={styles.uploadIcon} onPress={chooseFile}>
              <UploadIcon width={30} height={30} />
            </Pressable>
            {file && (
              <Pressable onPress={chooseFile}>
                <Image
                  source={{
                    uri: file[0].uri,
                  }}
                  style={styles.avatarImg}
                />
              </Pressable>
            )}
          </View>
          <Text>Upload Image</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formElement}>
            <Text style={styles.label}>Company Name</Text>
            <View style={styles.formInput}>
              <TextInput
                style={styles.InputEle}
                placeholder="eg. cloudshine Media Pvt. Ltd"
              />
            </View>
          </View>
          <View style={styles.formElement}>
            <Text style={styles.label}>Founded Date</Text>
            <TouchableOpacity
              style={[styles.formInput, styles.datePicker]}
              onPress={() => showMode('date')}>
              <TextInput
                style={styles.InputEle}
                placeholder="Date"
                value={dateInput}
              />
              <CalenderIcon width={40} height={30} />
            </TouchableOpacity>
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              display="default"
              onChange={() => onChange(date)}
            />
          )}
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
              <ButtonOutlined content={'Cancel'} onPress={onPress} />
            </View>
            <View style={styles.btnWidth}>
              <Button content={'Save'} onPress={onPress} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddUpdateProfile;
