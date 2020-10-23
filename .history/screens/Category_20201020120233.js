import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function category(props) {
    // console.log('route', route)
    const { product } = props
    const onAddToCart = () => { }
    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                <Image style={styles.img} source={{ uri: product && product.images[0].url }} />
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
