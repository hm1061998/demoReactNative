import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux'
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
                    options={{ tabBarBadge: dataCart.length }}
                    initialParams={{ iconName: "shopping-cart" }} />
                <Tab.Screen name="Setting" component={SettingStackScreen} initialParams={{ iconName: "gear" }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator