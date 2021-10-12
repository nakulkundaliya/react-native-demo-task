import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import COLORS from '../Utils/Color';

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              height: 60,
              backgroundColor: COLORS.BLACK,
              paddingTop: 20,
              paddingHorizontal: 30,
            }}>
            {label === 'home' && (
              <Icon1
                name="home"
                color={isFocused ? COLORS.PRIMARY : COLORS.WHITE}
                size={25}
              />
            )}
            {label === 'wallet' && (
              <Icon1
                name="wallet"
                color={isFocused ? COLORS.PRIMARY : COLORS.WHITE}
                size={25}
              />
            )}
            {label === 'chat' && (
              <Icon1
                name="message1"
                color={isFocused ? COLORS.PRIMARY : COLORS.WHITE}
                size={25}
              />
            )}
            {label === 'profile' && (
              <Icon1
                name="user"
                color={isFocused ? COLORS.PRIMARY : COLORS.WHITE}
                size={25}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;
