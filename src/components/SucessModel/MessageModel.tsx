import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React from 'react';
import styles from './MessageModelStyle';
import LinearGradient from 'react-native-linear-gradient';
import SucessIcon from '../../assets/svgs/check.svg';
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
          start={{x: 0.3, y: .3}}
          end={{x: 0.3, y: 0.3}}
          colors={['rgba(0, 0, 0, 0.79)', 'rgba(0, 0, 0, 0.3)']}
          style={styles.model}>
          <View style={styles.conatiner}>
            <TouchableOpacity style={styles.closeIcon} onPress={closeModel}>
              <CrossIcon width={18} height={18} />
            </TouchableOpacity>
            <View style={styles.messageIcon}>
              <SucessIcon width={60} height={60} />
            </View>
            <Text style={styles.messageText}>{modelMessage}</Text>
            <View style={styles.modelButton}>
              <Button content={buttonText} />
            </View>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};

export default MessageModel;
