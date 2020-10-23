import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import axios from "axios";
import ProductListItem from '../components/productListItem'
import { useSpin } from './Categories'
import ENV from '../ENV'
export default function category(props) {
    const [products, setProducts] = useState([])
    const { route } = props
    const categoryId = route.params.categoryId
    const Spin = useSpin()
    const [spinning, setSpinning] = useState(false)
    useEffect(() => {
        setSpinning(true)
        axios.get(`${ENV.API_SERVER}/products?categoryId=${categoryId}`)
            .then(res => {
                setSpinning(false)
                setProducts(res.data)
            })
    }, [])
    return (
        <View>
            {spinning ? Spin : (
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
            )}

        </View>

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