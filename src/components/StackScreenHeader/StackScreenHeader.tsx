import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './StackScreenStyle';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList, drawerParamList} from '../../navigations/types';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {LeftArrowIcon} from '../../assets';

interface headerProps {
  title: string;
}
const StackScreenHeader: React.FC<headerProps> = ({title}) => {
  let image = false;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const navigationDrawer =
    useNavigation<DrawerNavigationProp<drawerParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <TouchableOpacity
          style={styles.leftArrowIcon}
          onPress={() => navigation.goBack()}>
          <LeftArrowIcon width={23} height={23} />
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>{title}</Text>
      <Pressable
        style={styles.avatar}
        onPress={() => navigationDrawer.navigate('MyProfile')}>
        {image ? (
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.avatarImg}
          />
        ) : (
          <View style={styles.avatarDummy}>
            <Text style={styles.avatarText}>rc</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default StackScreenHeader;
