import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux'
import { View, Text } from 'react-native'
import {
    HomeStackScreen,
    OrderStackScreen,
    SettingStackScreen,
    CartStackScreen
} from './config/navigate.config'
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
    const { dataCart } = useSelector(state => state.cartStore)
    // console.log("dataCart", dataCart.length)
    return (
        <View>
            <Text>this is ios device</Text>
        </View>
    )
}
export default AppNavigator