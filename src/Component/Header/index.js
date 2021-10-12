import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../../Utils/Color';

export const Header = props => {
  const {onPress} = props;
  return (
    <View style={style.mainContainer}>
      <Icon1 onPress={onPress} name="menu" size={25} color={COLORS.WHITE} />
      <Icon2 name="ellipsis-v" size={20} color={COLORS.WHITE} />
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
});
