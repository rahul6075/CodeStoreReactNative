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

// Import Icons
import PasswordIcon from '../assets/svgs/pasword.svg';

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
            return <PasswordIcon width={20} height={20} />;
          },
        }}
      />
      <Drawer.Screen
        name="MyProfile"
        component={ProfileScreen}
        options={{
          drawerIcon() {
            return <PasswordIcon width={20} height={20} />;
          },
        }}
      />
      <Drawer.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          drawerIcon() {
            return <PasswordIcon width={20} height={20} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
