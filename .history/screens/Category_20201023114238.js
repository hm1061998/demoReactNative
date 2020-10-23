import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import ProductListItem from '../components/productListItem'
import { useSelector, useDispatch } from 'react-redux'
import { useSpin } from '../ultil'

const srceenWidth = Dimensions.get('window').width
const srceenHeight = Dimensions.get('window').height
const PAGE_SIZE = 8
function Category(props) {
    const [products, setProducts] = useState([])
    const [dataResult, setDataResult] = useState({})
    const { route } = props
    const categoryId = route.params.categoryId
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.productsStore)
    const Spin = useSpin()
    useEffect(() => {
        dispatch({
            type: "GET_DATA_PRODUCTS",
            payload: { id: categoryId, range: [0, PAGE_SIZE - 1] },
            callback: res => {
                // console.log('res', res)
                const result = res && res.result || {}
                const list = result.list
                setProducts(list)
                setDataResult(result)
            }
        })

    }, [])

    const loadMoreData = () => {
        const { current, total } = dataResult && dataResult.pagination
        const lastIndex = (current + 1) * PAGE_SIZE
        const firstIndex = lastIndex - PAGE_SIZE
        if (products.length >= total) return
        // console.log('current', current)
        //On click of Load More button We will call the web API again
        dispatch({
            type: "GET_DATA_PRODUCTS",
            payload: { id: categoryId, range: [firstIndex, lastIndex - 1] },
            callback: res => {
                // console.log('res', res)
                const result = res && res.result || {}
                const list = result.list
                const newProducts = [...products]
                const concatLIst = newProducts.concat(list)
                setProducts(concatLIst)
                setDataResult(result)
            }
        })

    };

    const renderFooter = () => {
        if (!loading) return null
        return (
            //Footer View with Load More button
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                {Spin}
            </View>
        );
    }
    // console.log('srceenWidth', srceenWidth / 2)
    return (
        <View>


            <FlatList
                data={products}
                renderItem={({ item }) =>
                    <View style={styles.wrapper}>
                        <ProductListItem product={item} />
                    </View>
                }
                keyExtractor={(item) => `${item.id}`}
                // contentContainerStyle={styles.container}
                ListFooterComponent={renderFooter}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.5}
            />


        </View>

    )
}

export default Category
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8,
    }
})