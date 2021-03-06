import React, { useEffect, useRef } from "react";
import { Animated, View, Easing, StyleSheet } from 'react-native';


export const useSpin = () => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const onSpin = () => {
    spinValue.setValue(0)
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
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
      marginTop: 10
    }}>

      <Animated.View
        style={{
          width: 40,
          height: 40,
          transform: [{ rotate: spin }],
          // flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={[styles.icon, { backgroundColor: '#1890ff' }]}></View>
          <View style={[styles.icon, { backgroundColor: '#1890ff', opacity: 0.3 }]}></View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={[styles.icon, { backgroundColor: '#1890ff', opacity: 0.3 }]}></View>
          <View style={[styles.icon, { backgroundColor: '#1890ff' }]}></View>
        </View>

      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 15,
    height: 15,
    borderRadius: 50,
    margin: 3
  }
})