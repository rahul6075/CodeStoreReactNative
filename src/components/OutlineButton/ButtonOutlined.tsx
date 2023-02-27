import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

interface buttonProps {
  content: string;
  onPress: () => void
}

const ButtonOutlined: React.FC<buttonProps> = ({content, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{content}</Text>
  </TouchableOpacity>
  )
}

export default ButtonOutlined
const styles = StyleSheet.create({
    button: {
      paddingVertical: 8,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      borderColor:'#3C65F5',
      borderWidth:1,
      borderRadius:5,
    },
    buttonText: {
      color: '#3C65F5',
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '700',
      textAlign: 'center',
    },
  });
  