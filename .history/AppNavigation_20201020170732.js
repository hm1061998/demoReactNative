import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Category from './screens/Category'
import Categories from './screens/Categories'
import Cart from './screens/Cart'
import Order from './screens/Order'
import Setting from './screens/Setting'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux'
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
    const { dataCart } = useSelector(state => state)
    console.log("dataCart", dataCart)
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = route.params.iconName
                        // You can return any component that you like here!
                        // return <Ionicons name={iconName} size={size} color={color} />;
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'red',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} initialParams={{ iconName: "home" }} />
                <Tab.Screen name="Order" component={OrderStackScreen} initialParams={{ iconName: "user-circle-o" }} />
                <Tab.Screen name="Cart" component={CartStackScreen}
                    options={{ tabBarBadge: 3 }}
                    initialParams={{ iconName: "shopping-cart" }} />
                <Tab.Screen name="Setting" component={SettingStackScreen} initialParams={{ iconName: "gear" }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator