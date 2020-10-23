import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Category from '../screens/Category'
import Categories from '../screens/Categories'
import Cart from '../screens/Cart'
import Order from '../screens/Order'
import Setting from '../screens/Setting'


const HomeStack = createStackNavigator();
export const HomeStackScreen = () => {
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
export const CartStackScreen = () => {
    return (
        <CartStack.Navigator>
            <CartStack.Screen name="Cart" component={Cart}
                options={({ route }) => ({
                    title: "My Cart",
                })}
            />
        </CartStack.Navigator>
    )
}
const OrderStack = createStackNavigator()
export const OrderStackScreen = () => {
    return (
        <OrderStack.Navigator>
            <OrderStack.Screen name="Order" component={Order} />
        </OrderStack.Navigator>
    )
}
const SettingStack = createStackNavigator()
export const SettingStackScreen = () => {
    return (
        <SettingStack.Navigator>
            <SettingStack.Screen name="Setting" component={Setting} />
        </SettingStack.Navigator>
    )
}
