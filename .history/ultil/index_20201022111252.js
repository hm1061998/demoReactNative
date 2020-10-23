import React, { useEffect, useRef } from "react";
import { Animated, View, Easing, StyleSheet } from 'react-native';


export const useSpin = () => {
    const spinValue = useRef(new Animated.Value(0)).current;
    const onSpin = () => {
        spinValue.setValue(0)
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => onSpin());
    };
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    useEffect(() => {
        onSpin()
    }, [])
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 300
        }}>
            <Animated.Image
                style={{
                    width: 227,
                    height: 200,
                    transform: [{ rotate: spin }]
                }}
                source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
            />

            <Animated.View
                style={{
                    width: 25,
                    height: 25,
                    transform: [{ rotate: spin }],
                    // flex: 1,
                    flexDirection: 'row'
                }}
            >
                <View style={{ flex: 1 }}>
                    <View style={[styles.icon, { backgroundColor: '#1890ff' }]}></View>
                    <View style={[styles.icon, { backgroundColor: '#1890ff' }]}></View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={[styles.icon, { backgroundColor: '#1890ff' }]}></View>
                    <View style={[styles.icon, { backgroundColor: '#1890ff' }]}></View>
                </View>

            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 10,
        height: 10,
        borderRadius: 50,
        // marginTop: 4,
        // marginBottom: 4,
        // marginLeft: 4,
        // marginRight: 4
    }
})