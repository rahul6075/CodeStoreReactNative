import {View, Text, Modal, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './ToastStyle';

// Import Icons
import {CheckIcon, CrossRedIcon, CrossIcon} from '../../assets';
import {useAppSelector} from '../../constants';

const ToastMessage = () => {
  const {data, visibility} = useAppSelector(state => state.alertReducer);
  const [modelVisible, setModelVisible] = useState<boolean>(visibility);
  console.log('alert', data);
  const closeToast = () => {
    setModelVisible(!modelVisible);
  };

  return (
    <Modal animationType={'slide'} transparent={true} visible={visibility}>
      <View style={styles.container}>
        <View style={styles.statusIcon}>
          {data[0]?.code === 200 ? (
            <View style={styles.statusIconSucess}>
              <CheckIcon width={20} height={20} />
            </View>
          ) : (
            <View style={styles.statusIconError}>
              <CrossRedIcon width={15} height={15} />
            </View>
          )}
        </View>
        <View style={styles.messageText}>
          <Text style={styles.message}>{data[0]?.message}</Text>
        </View>
        <Pressable style={styles.closeModelIcons} onPress={closeToast}>
          <CrossIcon width={15} height={15} />
        </Pressable>
      </View>
    </Modal>
  );
};

export default ToastMessage;
