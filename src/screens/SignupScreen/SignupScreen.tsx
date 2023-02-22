import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './SignupStyle';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import { useNavigation } from '@react-navigation/native';
//Import Svgs
import LogoName from '../../assets/images/logoBlueName.svg';
import Logo from '../../assets/images/logoImgBlue.svg';
import LeftArrowIcon from '../../assets/images/arrowLeft.svg'



export default function SignupScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftArrowIcon}
        onPress={() => navigation.goBack()}
      >
         <LeftArrowIcon width={23} height={23} />
      </TouchableOpacity>
      <View style={styles.formSection}>
        <View style={styles.logoSection}>
          <Logo width={65} height={65} />
          <LogoName width={120} height={40} />
        </View>
        <Text style={styles.formHeading}>Business Sign Up</Text>
        <View style={styles.formElememt}>
          <TextInput placeholder="Name" style={styles.formInput} />
        </View>
        <View style={styles.formElememt}>
          <TextInput placeholder="Email" style={styles.formInput} />
        </View>
        <View style={[styles.formElememt, styles.phoneStyle]}>
          <TextInput placeholder="+1" style={styles.formInputcode} />
          <TextInput placeholder="Phone No" style={styles.formInputNumber} />
        </View>
        <View style={styles.formElememt}>
          <TextInput placeholder="Password" style={styles.formInput} />
        </View>
        <View style={styles.formElememt}>
          <TextInput placeholder="Conform Password" style={styles.formInput} />
        </View>
        <TouchableOpacity style={styles.formButton}>
          <Text style={styles.formButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.containerFooter}>
          <View style={styles.footerHeading}>
            <Text style={styles.info}>Already have an account?</Text>
            <TouchableOpacity
             onPress={() => navigation.navigate('Login')}
            >
              <Text style={[styles.info, styles.signInBtn]}> Sign In</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.info}>© Copyright 2022 Gandalf </Text>
        </View>
      </View>
    </View>
  );
}
