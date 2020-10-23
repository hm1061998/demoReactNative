import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Category from './screens/Category'
import Categories from './screens/Categories'

const AppNavigator = createStackNavigator({
    Categoties: {
        screens: Categories
    },
    Category: {
        screens: Category
    }
})

export default AppNavigator