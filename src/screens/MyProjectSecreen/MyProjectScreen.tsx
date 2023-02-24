import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './MyProjectStyle';
import {Header} from '../../components';
import {MessageModel, Button, Profile} from '../../components/index';

// import icons
import {FolderIcon} from '../../assets/index';

const MyProjectScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const openModel = () => {
    setIsModalVisible(true);
  };
  const closeModel = () => {
    setIsModalVisible(false);
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
                <Button content="Create a Project" />
              </View>
            </View>
          </View>

          {/* <View style={styles.modelSection}>
        <TouchableOpacity onPress={openModel}>
          <Text>View Model</Text>
        </TouchableOpacity>
        {isModalVisible && (
          <MessageModel
            visibility={isModalVisible}
            closeModel={closeModel}
            modelType={1}
            modelMessage={'Password reset successfully'}
            buttonText={'Login'}
          />
        )}
      </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProjectScreen;
