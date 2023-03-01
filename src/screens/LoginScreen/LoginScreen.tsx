import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import styles from '../SignupScreen/SignupStyle';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/types';
import {useNavigation} from '@react-navigation/native';
import {Checkbox, ToastMessage} from '../../components/index';
import userServices from '../../services/userServices';
//Import Svgs
import {
  Logo,
  LogoName,
  LeftArrowIcon,
  ShowPasswordIcon,
  HidePasswordIcon,
} from '../../assets';
import {loginValidationSchema} from '../../utils/validations/authValidations';

export default function LoginScreen() {
  const [isChecked, setisChecked] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const loginHandler = (values: any) => {
    const data = {...values, saveCredentials: isChecked};
    console.log('data', data);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftArrowIcon}
        onPress={() => navigation.goBack()}>
        <LeftArrowIcon width={23} height={23} />
      </TouchableOpacity>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => loginHandler(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={styles.formSection}>
            <View style={[styles.logoSection, styles.loginPageLogo]}>
              <Logo width={65} height={65} />
              <LogoName width={120} height={40} />
            </View>
            <Text style={styles.formHeading}>Business Login</Text>
            <View style={styles.formElememt}>
              <TextInput
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                style={styles.formInput}
              />
            </View>
            {errors?.email && (
              <Text style={styles.errorText}>{errors?.email}</Text>
            )}
            <View style={[styles.formElememt, styles.passwordElement]}>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
                style={[styles.formInput, styles.passwordInput]}
                secureTextEntry={showPassword}
              />

              {showPassword ? (
                <Pressable
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.passwordIcons}>
                  <ShowPasswordIcon width={20} height={20} />
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.passwordIcons}>
                  <HidePasswordIcon width={20} height={20} />
                </Pressable>
              )}
            </View>
            {errors?.password && (
              <Text style={styles.errorText}>{errors?.password}</Text>
            )}
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
            <TouchableOpacity style={styles.formButton} onPress={handleSubmit}>
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
              <Text style={[styles.info, styles.signInBtn]}>Verify</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
