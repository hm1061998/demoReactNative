import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux'
import CartItem from '../components/cartItem'

const Cart = (props) => {
    const { dataCart } = useSelector(state => state.cartStore)

    return (
        <View>
            {dataCart && dataCart.length > 0 ?
                <FlatList data={dataCart}
                    renderItem={({ item }) => <CartItem data={item} />}
                    keyExtractor={(item) => `${item.id}`}
                />
                :
                <Text>Giỏ hàng trống</Text>
            }

        </View>

    )
}
export default Cart