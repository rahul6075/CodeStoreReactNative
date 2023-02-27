import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './FilterModelStyle';
import LinearGradient from 'react-native-linear-gradient';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetfilter} from '../index';
interface filterModelProps {
  visibility: boolean;
  closeModel: () => void;
}

const FilterModel: React.FC<filterModelProps> = ({visibility, closeModel}) => {
  return (
    <Modal animationType={'none'} transparent={true} visible={visibility}>
      <LinearGradient
        start={{x: 0.5, y: 0.5}}
        end={{x: 0.5, y: 0.5}}
        colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)']}
        style={styles.model}>
        <GestureHandlerRootView style={{flex: 1}}>
          <View style={styles.container}>
            <BottomSheetfilter closeModel={closeModel} />
          </View>
        </GestureHandlerRootView>
      </LinearGradient>
    </Modal>
  );
};

export default FilterModel;
