import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React from 'react';
import styles from './MessageModelStyle';
import LinearGradient from 'react-native-linear-gradient';
import SucessIcon from '../../assets/svgs/check.svg';
import FalureIcon from '../../assets/svgs/crossRed.svg';
import CrossIcon from '../../assets/svgs/cross.svg';
import {Button} from '../index';
interface modelProps {
  visibility: boolean;
  modelType: number;
  buttonText: string;
  modelMessage: string;
  closeModel: () => void;
}
const MessageModel: React.FC<modelProps> = ({
  visibility,
  modelType,
  buttonText,
  modelMessage,
  closeModel,
}) => {
  return (
    <Modal animationType={'fade'} transparent={false} visible={visibility}>
      <View style={styles.model}>
        <LinearGradient
          start={{x: 0.5, y: 0.5}}
          end={{x: 0.5, y: 0.5}}
          colors={['rgba(0, 0, 0, 0.79)', 'rgba(0, 0, 0, 0.3)']}
          style={styles.model}>
          <View style={styles.conatiner}>
            <TouchableOpacity style={styles.closeIcon} onPress={closeModel}>
              <CrossIcon width={10} height={10} />
            </TouchableOpacity>
            <View style={styles.messageIcon}>
              {modelType ? (
                <SucessIcon width={60} height={60} />
              ) : (
                <View style={styles.failureIcon}>
                  <FalureIcon width={40} height={40} />
                </View>
              )}
            </View>
            <Text style={styles.messageText}>{modelMessage}</Text>
            <View style={styles.modelButton}>
              <Button content={buttonText} onPress={closeModel} />
            </View>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};

export default MessageModel;
