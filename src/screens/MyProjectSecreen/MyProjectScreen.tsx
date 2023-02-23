import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './MyProjectStyle';
import {Header} from '../../components';
import {MessageModel} from '../../components/index';
const MyProjectScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const openModel = () => {
    setIsModalVisible(true);
  };
  const closeModel = () => {
    setIsModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Header />
      </View>
      <View style={styles.modelSection}>
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
      </View>
    </View>
  );
};

export default MyProjectScreen;
