import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/types';
import styles from './MyProjectStyle';
import {Header} from '../../components';
import {Button, Profile} from '../../components/index';

// import icons
import {FolderIcon} from '../../assets/index';

const MyProjectScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const onPress = () => {
    navigation.navigate('CreateProject');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <Header />
          </View>
          <View style={styles.content}>
            <Text style={styles.screenHeading}>Profile Info</Text>

            <View style={styles.profile}>
              <Profile />
            </View>
            <Text style={styles.screenHeading}>Your Projects</Text>
            <View style={styles.projectContainer}>
              <View style={styles.folderIcon}>
                <FolderIcon width={100} height={90} />
              </View>
              <Text style={styles.projectContainerHeading}>
                No Project created yet
              </Text>
              <Text style={styles.projectContainerDesc}>
                Create a project to the marketplace and let talent come to you.
              </Text>
              <View style={styles.projectContainerBtn}>
                <Button content="Create a Project" onPress={onPress} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProjectScreen;
