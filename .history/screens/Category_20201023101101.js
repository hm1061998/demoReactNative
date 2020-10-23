import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import ProductListItem from '../components/productListItem'
import { useSelector, useDispatch } from 'react-redux'
import { useSpin } from '../ultil'

const srceenWidth = Dimensions.get('window').width
const srceenHeight = Dimensions.get('window').height

function Category(props) {
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

    // console.log('srceenWidth', srceenWidth / 2)
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

export default Category
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        // flex: 1
    },
    wrapper: {
        // flex: 1,
        paddingHorizontal: 8,
        width: parseInt(srceenWidth / 2, 10)
    }
})