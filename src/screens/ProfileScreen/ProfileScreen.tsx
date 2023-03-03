import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import styles from './ProfileStyle';
// Import Icons
import {EditIcon, EmailIcon, CompanyIcon, CheckIcon} from '../../assets/index';
import {Header} from '../../components/index';
import { RootStackParamList } from '../../navigations/types';
const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.profileScreen}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.container}>
        <View style={styles.Profileheader}>
          <TouchableOpacity>
            <Text style={styles.profileButton}>Profile Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileEditIcon} onPress={() => navigation.navigate('UpdateBusinessProfile')}>
            <EditIcon width={23} height={23} />
          </TouchableOpacity>
        </View>
        <View style={styles.ProfileContent}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/svgs/companyavatar.png')}
              style={styles.profileAvatar}
            />
          </TouchableOpacity>
          <View style={styles.profileDescription}>
            <Text style={styles.profileName}>CloudSine Media Ltd.</Text>
            <View style={styles.profileTag}>
              <View style={styles.profileTagIcon}>
                <CheckIcon width={16} height={17} />
              </View>
              <Text style={styles.profileTagText}>Verified</Text>
            </View>
          </View>
          <Text style={styles.profileFounded}>Founded in - 1994</Text>
          <Text style={styles.profileAboutHeading}>About Company</Text>
          <Text style={styles.profileAboutDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            delectus, deleniti culpa incidunt blanditiis harum.
          </Text>
        </View>
        <View style={styles.Profilefooter}>
          <Text style={styles.profileUsername}>Andrey Kim</Text>
          <View style={styles.profileContacts}>
            <View style={styles.profileContactsLink}>
              <EmailIcon width={15} height={15} />
              <Text style={styles.linkText}>Profile Details</Text>
            </View>
            <View style={styles.profileContactsLink}>
              <CompanyIcon width={15} height={15} />
              <Text style={styles.linkText}>+91 7860965109</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
