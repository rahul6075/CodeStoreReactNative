import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';

import {UserVerifyCard, Footer, Header} from '../../components/index';
import styles from './UserVerifyStyle';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/types';

const UserVerifyScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.main}>
            <UserVerifyCard cardType={'OTP'} />
            <UserVerifyCard cardType={'profile'} />
          </View>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.skipButtonText}>Skip For Now</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Footer />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserVerifyScreen;
