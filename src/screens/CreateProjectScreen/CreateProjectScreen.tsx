import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/types';
import {useNavigation} from '@react-navigation/native';
import styles from './CreateProjectStyle';
import {Button, ButtonOutlined, Checkbox} from '../../components';
import {CalenderIcon} from '../../assets';
const CreateProjectScreen = () => {
  const [isChecked, setisChecked] = useState<boolean>(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    setisChecked(!isChecked);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.formElement}>
            <Text style={styles.label}>Project Title</Text>
            <View style={styles.formInput}>
              <TextInput
                style={styles.InputEle}
                placeholder="eg. cloudshine Media Pvt. Ltd"
              />
            </View>
          </View>
          <View style={[styles.formElement]}>
            <Text style={styles.label}>Description</Text>
            <View style={[styles.formInput, styles.desc]}>
              <TextInput
                style={styles.InputEle}
                multiline={true}
                numberOfLines={2}
              />
            </View>
          </View>

          <View style={styles.formElementCol}>
            <View style={styles.colFirst}>
              <Text style={styles.label}>Role</Text>
              <Pressable style={styles.formInputCheck} onPress={onPress}>
                <Checkbox
                  title={'Project Manager'}
                  onPress={onPress}
                  isChecked={isChecked}
                />
              </Pressable>
            </View>
            <View style={styles.colSecond}>
              <Text style={styles.label}>Resource</Text>
              <View style={styles.formInput}>
                <TextInput
                  style={styles.InputEle}
                  placeholder="eg. 1 or 2 .."
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>
          <View style={styles.formElementCol}>
            <View style={styles.colFirst}>
              <Pressable style={styles.formInputCheck} onPress={onPress}>
                <Checkbox
                  title={'Architect'}
                  onPress={onPress}
                  isChecked={isChecked}
                />
              </Pressable>
            </View>
            <View style={styles.colSecond}>
              <View style={styles.formInput}>
                <TextInput
                  style={styles.InputEle}
                  placeholder="eg. 1 or 2 .."
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>
          <View style={styles.formElementCol}>
            <View style={styles.colFirst}>
              <Pressable style={styles.formInputCheck} onPress={onPress}>
                <Checkbox
                  title={'Experts'}
                  onPress={onPress}
                  isChecked={isChecked}
                />
              </Pressable>
            </View>
            <View style={styles.colSecond}>
              <View style={styles.formInput}>
                <TextInput
                  style={styles.InputEle}
                  placeholder="eg. 1 or 2 .."
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>
          <View style={styles.formElementCol}>
            <View style={[styles.colFirst, styles.colFirstSatrtDate]}>
              <Text style={styles.label}>Project Duration</Text>
              <TouchableOpacity style={[styles.formInput, styles.datePicker]}>
                <TextInput style={styles.InputEle} placeholder="Start Date" />
                <CalenderIcon width={40} height={30} />
              </TouchableOpacity>
            </View>
            <View style={[styles.colSecond, styles.colFirstEndDate]}>
              <Text style={styles.label}></Text>
              <TouchableOpacity style={[styles.formInput, styles.datePicker]}>
                <TextInput style={styles.InputEle} placeholder="End Date" />
                <CalenderIcon width={40} height={30} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.formElement, styles.butttonElements]}>
            <View style={styles.btnWidth}>
              <ButtonOutlined content={'Cancel'} onPress={onPress} />
            </View>
            <View style={styles.btnWidth}>
              <Button content={'Create'} onPress={onPress} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateProjectScreen;
