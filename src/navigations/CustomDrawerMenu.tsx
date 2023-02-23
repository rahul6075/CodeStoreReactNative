import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './DrawerMenuStyle';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import LeftArrowIcon from '../assets/images/arrowLeft.svg';
import LogoutIcon from '../assets/svgs/logout.svg';
const CustomDrawerMenu = (props: any) => {
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <TouchableOpacity style={styles.leftArrowIcon}>
        <LeftArrowIcon width={23} height={23} />
      </TouchableOpacity>
      <View style={styles.drawerHeader}>
        <View style={styles.avatarImg}>
          <Image
            source={require('../assets/svgs/avatar.png')}
            style={styles.avatarImg}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>Andrey Kim</Text>
          <Text style={styles.company}>Company Name</Text>
        </View>
      </View>
      <DrawerItemList {...props} />

      <TouchableOpacity style={styles.drawerFooter}>
        <LogoutIcon />
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerMenu;
