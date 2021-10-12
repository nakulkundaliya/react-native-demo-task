import React from 'react';
import {StyleSheet} from 'react-native';
import Balance from './src/Screen/Balance';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from './src/Utils/Color';
import Icon1 from 'react-native-vector-icons/AntDesign';
import MyTabBar from './src/Component/MyTabBar';
import Wallet from './src/Screen/Wallet';
import Chat from './src/Screen/Chat';
import Profile from './src/Screen/Profile';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BalanceNavigator = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Balance"
        component={Balance}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: style.drawerStyle,
        labelStyle: style.labelStyle,
      }}
      initialRouteName="balance">
      <Drawer.Screen
        options={{headerShown: false}}
        name="balance"
        component={BalanceNavigator}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen
          name="balance"
          options={{
            tabBarLabel: 'home',
            headerShown: false,
          }}
          component={DrawerNavigator}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'wallet',
            tabBarIcon: ({color}) => (
              <Icon1 name="wallet" color={COLORS.PRIMARY} size={25} />
            ),
          }}
          name="Wallet"
          component={Wallet}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'chat',
          }}
          name="Chat"
          component={Chat}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'profile',
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const style = StyleSheet.create({
  drawerStyle: {
    backgroundColor: 'gray',
    width: 240,
    overlayColor: 'transparent',
    activeTintColor: 'white',
  },
  labelStyle: {
    marginLeft: 20,
    color: 'white',
  },
});
