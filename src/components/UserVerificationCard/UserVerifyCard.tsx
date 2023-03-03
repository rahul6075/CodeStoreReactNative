import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/types';
import styles from './UserVerifyCardStyle';
//Svgs Import
import CardImg from '../../assets/svgs/cardImg1.svg';
import ProfileImg from '../../assets/svgs/cardImg2.svg';
interface userVerifyCardProps {
  cardType: string;
}

const UserVerifyCard: React.FC<userVerifyCardProps> = ({cardType}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.cardImage}>
        {cardType === 'OTP' ? (
          <CardImg width={150} height={150} />
        ) : (
          <ProfileImg width={150} height={150} />
        )}
      </View>
      {cardType === 'OTP' ? (
        <View>
          <Text style={styles.cardHeading}>Please verify your email</Text>
          <Text style={styles.cardDesc}>
            Enter the verification OTP we have sent on
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.cardHeading}>Please complete your profile</Text>
          <Text style={styles.cardDesc}>
            Please fill the required details to complete your profile for
            further processing & verification
          </Text>
        </View>
      )}
      <Text style={styles.cardEmail}>andrey@gmail.com</Text>

      {cardType === 'OTP' ? (
        <View>
          <View style={styles.formContainer}>
            <View style={styles.formElement}>
              <TextInput style={styles.formInput} />
            </View>
            <View style={styles.formElement}>
              <TextInput style={styles.formInput} />
            </View>
            <View style={styles.formElement}>
              <TextInput style={styles.formInput} />
            </View>
            <View style={styles.formElement}>
              <TextInput style={styles.formInput} />
            </View>
            <View style={styles.formElement}>
              <TextInput style={styles.formInput} />
            </View>
            <View style={styles.formElement}>
              <TextInput style={styles.formInput} />
            </View>
          </View>
          <View style={styles.formElementBtn}>
            <TouchableOpacity>
              <Text style={[styles.btn, styles.activeBtn]}>RESEND OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.btn]}>SUBMIT OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.profile}
          onPress={() => navigation.navigate('AddupdateProfile')}>
          <Text style={[styles.profileBtn]}>Complete profile</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserVerifyCard;
