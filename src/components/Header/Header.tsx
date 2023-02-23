import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {drawerParamList} from '../../navigations/types';

import styles from './HeaserStyle';

// Import Icons
import MenuIcon from '../../assets/svgs/Header.svg';
import LogoIcon from '../../assets/images/logoImgBlue.svg';
import LogoName from '../../assets/images/logoBlueName.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Header = () => {
  const navigation = useNavigation<DrawerNavigationProp<drawerParamList>>();
  return (
    <View style={styles.conatiner}>
      <View style={styles.logo}>
        <LogoIcon width={30} height={30} />
        <LogoName width={100} height={30} />
      </View>
      <View style={styles.menuIcon}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MenuIcon height={30} width={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
