import {View, Text} from 'react-native';
import React from 'react';

import {UserVerifyCard, Footer} from '../../components/index';
import styles from './UserVerifyStyle';

const UserVerifyScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.main}>
        <UserVerifyCard  cardType={'OTP'} />
        <UserVerifyCard  cardType={'profile'} />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

export default UserVerifyScreen;
