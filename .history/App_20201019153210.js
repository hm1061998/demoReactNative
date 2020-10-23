import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Category from './screens/Category'
import Categories from './screens/Categories'
const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen name="Categories" component={Categories}
          options={({ route }) => ({
            title: "My Home",

          })}
        />
        <Stack.Screen name="Category" component={Category}
          options={({ route }) => ({
            title: route.params.categoryName,

          })} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};



export default App;
