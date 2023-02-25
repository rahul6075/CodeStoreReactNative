import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
//imports icon
import {EmailIcon, CompanyIcon, StatusIcon} from '../../assets/index';
import {RootStackParamList} from '../../navigations/types';
const Profile = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.profile}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/svgs/avatar.png')}
          style={styles.avatarImg}
        />
        <View style={styles.statusIconProfile}>
          <StatusIcon width={18} height={18} />
        </View>
      </View>
      <Text style={styles.name}>Andrey Kim</Text>
      <View style={styles.info}>
        <View style={styles.profileContactsLink}>
          <EmailIcon width={17} height={17} />
          <Text style={styles.linkText}>business@gmail.com</Text>
        </View>
        <View style={styles.profileContactsLink}>
          <CompanyIcon width={17} height={17} />
          <Text style={styles.linkText}>Company Name</Text>
        </View>
      </View>
      <View style={styles.profileStatus}>
        <StatusIcon width={17} height={17} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AddupdateProfile', {
              userId: 10,
            })
          }>
          <Text style={styles.statusText}>Complete your profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0.3, height: 1},
    shadowOpacity: 0.4,
    borderRadius: 10,
    paddingVertical: 15,
  },
  profileHeader: {
    position: 'relative',
    width: 70,
  },
  avatarImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  statusIconProfile: {
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    right: 2,
  },
  info: {
    marginVertical: 15,
    paddingVertical: 5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  name: {
    color: '#000000',
    fontSize: 24,
    lineHeight: 26,
    marginVertical: 5,
  },
  profileContactsLink: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  linkText: {
    paddingLeft: 10,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  profileStatus: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingBottom: 3,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 1,
  },

  statusText: {
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.2,
  },
});
