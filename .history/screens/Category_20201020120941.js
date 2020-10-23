import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ProductListItem from '../components/productListItem'
export default function category(props) {
    const [products, setProducts] = useState([
        {
            id: 1, name: "name 1444", price: 2423423
        },
        {
            id: 2, name: "name 2", price: 2423423444
        },
        {
            id: 3, name: "name 3", price: 242
        }])

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
        />
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 8
    }
})