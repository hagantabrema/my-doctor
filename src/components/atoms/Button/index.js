import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';
import IconButton from './iconButton';
import PassButton from './passButton';

const Button = ({type, title, onPress, icon, disable}) => {
  if (type === 'pass-button') {
    return <PassButton disable={disable}/>
  }

  if (type === 'icon-button') {
    return (
      <IconButton icon={icon} onPress={onPress}/>
    )
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),

  text: type => ({
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
});
