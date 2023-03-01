import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './SignupStyle';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/types';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
//Import Svgs
import {Logo, LogoName, ShowPasswordIcon, HidePasswordIcon} from '../../assets';
import LeftArrowIcon from '../../assets/images/arrowLeft.svg';
import {SignupValidationSchema} from '../../utils/validations/authValidations';

export default function SignupScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const signupHandler = (values: any) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftArrowIcon}
        onPress={() => navigation.goBack()}>
        <LeftArrowIcon width={23} height={23} />
      </TouchableOpacity>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          countryCode: '',
          confirmPassword: '',
          contact: '',
        }}
        validationSchema={SignupValidationSchema}
        onSubmit={values => signupHandler(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={styles.formSection}>
            <View style={styles.logoSection}>
              <Logo width={65} height={65} />
              <LogoName width={120} height={40} />
            </View>
            <Text style={styles.formHeading}>Business Sign Up</Text>
            <View style={styles.formElememt}>
              <TextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="Name"
                style={styles.formInput}
              />
            </View>
            {errors?.name && (
              <Text style={styles.errorText}>{errors?.name}</Text>
            )}
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
            <View style={[styles.formElememt, styles.phoneStyle]}>
              <TextInput
                onChangeText={handleChange('countryCode')}
                onBlur={handleBlur('countryCode')}
                value={values.countryCode}
                placeholder="+91"
                style={[styles.formInputcode, styles.countryInput]}
              />
              <TextInput
                onChangeText={handleChange('contact')}
                onBlur={handleBlur('contact')}
                value={values.contact}
                placeholder="Phone No"
                style={[styles.formInputNumber, styles.contactInput]}
              />
            </View>
            {errors?.contact && (
              <Text style={styles.errorText}>{errors?.contact}</Text>
            )}
            {errors?.countryCode && (
              <Text style={styles.errorText}>{errors?.countryCode}</Text>
            )}
            <View style={[styles.formElememt, styles.passwordElement]}>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
                secureTextEntry={showPassword}
                style={[styles.formInput, styles.passwordInput]}
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
            <View style={[styles.formElememt, styles.passwordElement]}>
              <TextInput
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                placeholder="Conform Password"
                secureTextEntry={showPassword}
                style={[styles.formInput, styles.passwordInput]}
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

            <TouchableOpacity style={styles.formButton} onPress={handleSubmit}>
              <Text style={styles.formButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.containerFooter}>
              <View style={styles.footerHeading}>
                <Text style={styles.info}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={[styles.info, styles.signInBtn]}> Sign In</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.info}>© Copyright 2022 Gandalf </Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
