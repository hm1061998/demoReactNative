import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux'
import ENV from '../ENV'

export default function Product(props) {
    // console.log('route', route)
    // const state = useSelector(state => state)
    const dispatch = useDispatch()
    const { product } = props
    // console.log('state', state)

    const createTwoButtonAlert = () =>
        Alert.alert(
            "Thông báo",
            "Đã thêm sản phẩm vào giỏ hàng",
            [
                // {
                //     text: "Cancel",
                //     onPress: () => console.log("Cancel Pressed"),
                //     style: "cancel"
                // },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );

    const onAddToCart = () => {
        let newProduct = { ...product }
        newProduct.qty = 1
        dispatch({
            type: "addCartItem",
            payload: newProduct
        })
        createTwoButtonAlert()
    }

    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                <Image style={styles.img} source={{ uri: `${ENV.SERVER_IMAGE}${product && product.images}` }} />
                <View style={styles.info}>
                    <Text style={styles.name}>{product && product.name}</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>
                            {product && product.price}
                        </Text>
                        <TouchableOpacity onPress={onAddToCart}>
                            <Text style={styles.cartText}>
                                MUA +
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    cartText: {
        textTransform: "uppercase",
        fontSize: 16,
        color: "#2f95dc"
    },
    shadow: {
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 }
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: "#fff",
        overflow: "hidden",
        flex: 1
    },
    info: {
        padding: 8
    },
    img: {
        height: 150,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    name: {
        fontSize: 16,
        marginBottom: 8,

    },
    priceRow: {
        flexDirection: "row",
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1
    }
})