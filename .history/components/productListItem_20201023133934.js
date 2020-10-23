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
                <Image style={styles.img} source={{ uri: `data:image/png;base64,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` }} />
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
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
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
        writingDirection: "ltr"
    },
    priceRow: {
        flexDirection: "row",
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 0
    }
})