import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import styles from '../SignupScreen/SignupStyle';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/types';
import {useNavigation} from '@react-navigation/native';
import {changePasswordValidationSchema} from '../../utils/validations/authValidations';
//Import Svgs
import {
  Logo,
  LogoName,
  LeftArrowIcon,
  ShowPasswordIcon,
  HidePasswordIcon,
} from '../../assets';

const ChangePasswordScreen = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const changePasswordHandler = (values: any) => {
    const data = {...values};
    console.log('data', data);
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          currentPassword: '',
          newPassword: '',
          confirmNewPasssword: '',
        }}
        validationSchema={changePasswordValidationSchema}
        onSubmit={values => changePasswordHandler(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={styles.formSection}>
            <View style={[styles.logoSection, styles.loginPageLogo]}>
              <Logo width={65} height={65} />
              <LogoName width={120} height={40} />
            </View>
            <Text style={[styles.formHeading, {fontSize: 25}]}>
              Reset your password
            </Text>

            <View style={[styles.formElememt, styles.passwordElement]}>
              <TextInput
                onChangeText={handleChange('currentPassword')}
                onBlur={handleBlur('currentPassword')}
                value={values.currentPassword}
                placeholder="Type your current password*"
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
            {errors?.currentPassword && (
              <Text style={styles.errorText}>{errors?.currentPassword}</Text>
            )}
            <View style={[styles.formElememt, styles.passwordElement]}>
              <TextInput
                onChangeText={handleChange('newPassword')}
                onBlur={handleBlur('newPassword')}
                value={values.newPassword}
                placeholder="Type your new password*"
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
            {errors?.newPassword && (
              <Text style={styles.errorText}>{errors?.newPassword}</Text>
            )}
            <View style={[styles.formElememt, styles.passwordElement]}>
              <TextInput
                onChangeText={handleChange('confirmNewPasssword')}
                onBlur={handleBlur('confirmNewPasssword')}
                value={values.confirmNewPasssword}
                placeholder="Retype your new password*"
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
            {errors?.confirmNewPasssword && (
              <Text style={styles.errorText}>
                {errors?.confirmNewPasssword}
              </Text>
            )}

            <TouchableOpacity style={styles.formButton} onPress={handleSubmit}>
              <Text style={styles.formButtonText}>Save Password</Text>
            </TouchableOpacity>
            <View style={styles.containerFooter}>
              <Text style={styles.info}>© Copyright 2022 Gandalf </Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ChangePasswordScreen;
