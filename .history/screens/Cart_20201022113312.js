import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux'

const Cart = (props) => {
    const { dataCart } = useSelector(state => state.cartStore)

    return (
        <FlatList data={dataCart}
            renderItem={({ item }) =>
                <View style={{ flex: 1 }}>
                    <Text>{item.name}</Text>
                </View>
            }
            keyExtractor={(item) => `${item.id}`}
        />



    )
}
export default Cart