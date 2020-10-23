import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const srceenWidth = Dimensions.get('window').width
const srceenHeight = Dimensions.get('window').height

const CartItem = (props) => {
    const { data } = props
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: data.image }} />
            <View style={styles.info}>
                <Text>{data.name}</Text>
                <Text>{data.price}</Text>
            </View>
            <View>
                <TouchableOpacity><Text>Xóa</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    img: {
        width: srceenWidth / 5,
        height: 80
    },
    info: {
        width: srceenWidth / 2
    },

})
export default CartItem