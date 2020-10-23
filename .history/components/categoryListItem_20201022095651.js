import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
// import img from '../assets/airplane.png'

export default function categoryListItem(props) {
    const { category, onPress } = props
    // console.log("category.image ", category.image)
    return (
        <TouchableOpacity activeOpacity={0.5}
            onPress={onPress}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <Image
                    style={styles.categoryImage}
                    source={{ uri: category.image }}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        ...Platform.select({
            ios: {
                backgroundColor: 'red'
            },
            android: {
                backgroundColor: 'white'
            },
            default: {
                // other platforms, web for example
                backgroundColor: 'green'
            }
        }),
        shadowColor: 'red',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16
    },
    categoryImage: {
        width: 64,
        height: 64
    },

    title: {
        textTransform: "uppercase",
        marginBottom: 8,
        fontWeight: '700',
        color: '#000000'
    }
})