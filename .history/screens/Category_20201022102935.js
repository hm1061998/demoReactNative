import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ProductListItem from '../components/productListItem'
import { useSelector, useDispatch } from 'react-redux'
import { useSpin } from '../ultil'


export default function category(props) {
    const [products, setProducts] = useState([])
    const { route } = props
    const categoryId = route.params.categoryId
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.productsStore)
    const Spin = useSpin()
    useEffect(() => {
        dispatch({
            type: "GET_DATA_PRODUCTS",
            payload: { id: categoryId },
            callback: res => {
                // console.log('res', res)
                setProducts(res)
            }
        })

    }, [])
    return (
        <View>
            {loading ? Spin : (
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