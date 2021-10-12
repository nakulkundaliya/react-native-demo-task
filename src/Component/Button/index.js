import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

export const Button = props => {
  const {text, width, month, onPress, backgroundColor, color} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        {backgroundColor: backgroundColor, width: width},
      ]}
      {...props}>
      {month ? (
        <Text style={[styles.buttonText, {color: color}]}>
          {month}
          {'\n'}
          {text}
        </Text>
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
