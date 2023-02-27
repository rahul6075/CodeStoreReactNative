import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

interface buttonProps {
  content: string;
  onPress: () => void
}

const Button: React.FC<buttonProps> = ({content, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{content}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 9,
    paddingHorizontal: 15,
    backgroundColor: '#3C65F5',
    borderRadius:5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});
