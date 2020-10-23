import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Category from './screens/Category'
import Categories from './screens/Categories'
import Cart from './screens/Cart'
import Order from './screens/Order'
import Setting from './screens/Setting'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName="Categories">
            <HomeStack.Screen name="Categories" component={Categories}
                options={({ route }) => ({
                    title: "My Home",

                })}
            />
            <HomeStack.Screen name="Category" component={Category}
                options={({ route }) => ({
                    title: route.params.categoryName,

                })} />
        </HomeStack.Navigator>
    )
}
const CartStack = createStackNavigator();
const CartStackScreen = () => {
    return (
        <CartStack.Navigator>
            <CartStack.Screen name="Cart" component={Cart} />
        </CartStack.Navigator>
    )
}
const OrderStack = createStackNavigator()
const OrderStackScreen = () => {
    return (
        <OrderStack.Navigator>
            <OrderStack.Screen name="Order" component={Order} />
        </OrderStack.Navigator>
    )
}
const SettingStack = createStackNavigator()
const SettingStackScreen = () => {
    return (
        <SettingStack.Navigator>
            <SettingStack.Screen name="Setting" component={Setting} />
        </SettingStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Order" component={OrderStackScreen} />
                <Tab.Screen name="Cart" component={CartStackScreen} />
                <Tab.Screen name="Setting" component={SettingStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator