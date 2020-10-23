import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import axios from "axios";
import ProductListItem from '../components/productListItem'
export default function category(props) {
    const [products, setProducts] = useState([])
    const { route } = props
    const categoryId = route.params.categoryId

    useEffect(() => {
        axios.get(`https://1e44eb994fa2.ngrok.io/products?categoryId=${categoryId}`)
            .then(res => {
                setProducts(res.data)
            })
    }, [])
    return (
        <FlatList
            data={products}
            numColumns={2}
            renderItem={({ item }) =>
                <View style={styles.wrapper}>
                    <ProductListItem product={item} />
                </View>
            }
            keyExtractor={(item) => `${item.id}`}
            contentContainerStyle={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8
    }
})