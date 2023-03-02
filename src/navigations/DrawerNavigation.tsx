import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {drawerParamList} from './types';
//Import Screens
import {
  MyProjectScreen,
  ProfileScreen,
  ProfessionalsScreen,
  NotificationScreen,
  ChangePasswordScreen,
} from '../screens/index';
import CustomDrawerMenu from './CustomDrawerMenu';
import {StackScreenHeader} from '../components';
// Import Icons
import {PasswordIcon, NotificationIcon, PersonIcon} from '../assets';

const Drawer = createDrawerNavigator<drawerParamList>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerMenu {...props} />}
      screenOptions={{
        headerShown: false,

        drawerLabelStyle: {
          fontSize: 18,
          lineHeight: 20,
          color: '#000000',
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name="MyProject"
        component={MyProjectScreen}
        options={{
          drawerIcon() {
            return <PasswordIcon width={20} height={20} />;
          },
        }}
      />

      <Drawer.Screen
        name="Professionals"
        component={ProfessionalsScreen}
        options={{
          drawerIcon() {
            return <PasswordIcon width={20} height={20} />;
          },
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          drawerIcon() {
            return <NotificationIcon width={20} height={20} />;
          },
        }}
      />
      <Drawer.Screen
        name="MyProfile"
        component={ProfileScreen}
        options={{
          drawerIcon() {
            return <PersonIcon width={20} height={20} />;
          },
        }}
      />
      <Drawer.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          headerShown: true,
          header() {
            return <StackScreenHeader title={'Create Project'} />;
          },
          drawerIcon() {
            return <PasswordIcon width={20} height={20} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
