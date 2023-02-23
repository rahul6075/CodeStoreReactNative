import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

interface buttonProps {
  content: string;
}

const Button: React.FC<buttonProps> = ({content}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{content}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
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
