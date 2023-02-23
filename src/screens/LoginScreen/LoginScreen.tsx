import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../SignupScreen/SignupStyle';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/types';
import {useNavigation} from '@react-navigation/native';
import {Checkbox} from '../../components/index';
//Import Svgs
import LogoName from '../../assets/images/logoBlueName.svg';
import Logo from '../../assets/images/logoImgBlue.svg';
import LeftArrowIcon from '../../assets/images/arrowLeft.svg';

export default function LoginScreen() {
  const [isChecked, setisChecked] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();



  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftArrowIcon}
        onPress={() => navigation.goBack()}>
        <LeftArrowIcon width={23} height={23} />
      </TouchableOpacity>
      <View style={styles.formSection}>
        <View style={[styles.logoSection, styles.loginPageLogo]}>
          <Logo width={65} height={65} />
          <LogoName width={120} height={40} />
        </View>
        <Text style={styles.formHeading}>Business Login</Text>
        <View style={styles.formElememt}>
          <TextInput placeholder="Email" style={styles.formInput} />
        </View>
        <View style={styles.formElememt}>
          <TextInput placeholder="Password" style={styles.formInput} />
        </View>
        <View style={styles.formElememtCheck}>
          <Checkbox
            title={'Remember Password'}
            isChecked={isChecked}
            onPress={() => setisChecked(!isChecked)}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.info, styles.signInBtn]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.formButton}>
          <Text style={styles.formButtonText}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.containerFooter}>
          <View style={styles.footerHeading}>
            <Text style={styles.info}>Dont have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={[styles.info, styles.signInBtn]}>Sign Up </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.info}>© Copyright 2022 Gandalf </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Verify')}>
            <Text style={[styles.info, styles.signInBtn]}>
              Verify
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}
