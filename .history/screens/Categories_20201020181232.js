import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, FlatList, Animated, View } from "react-native";
import axios from "axios";
import CategoryListItem from '../components/categoryListItem'
const Screen = ({ navigation }) => {
    const [categories, setCategories] = useState([])
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // spin()
        axios.get(` https://136ca1377a2e.ngrok.io/category`)
            .then(res => {
                setCategories(res.data)
            })
            .catch(err => {
                console.log("err", err)
            })
    }, [])
    spin = () => {
        spinValue.setValue(0)
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 0,
                // easing: Easing.linear
            }
        ).start()  // gọi lại chính nó khi đã hoàn thành 
    }
    // console.log("categories", categories)
    const Spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']  // rotate từ 0 đến 360 độ dựa vào input range 
    })
    return (
        <View>
            <Animated.Image
                style={{ width: 227, height: 200, transform: [{ rotate: Spin }] }} // gán giá trị vào đây 
                source={require('../assets/airplane.png')} />
            <FlatList
                data={categories}
                renderItem={({ item }) => <CategoryListItem category={item} onPress={() => navigation.navigate('Category',
                    {
                        categoryName: item.name,
                        title: item.name,
                        categoryId: item.id
                    })} />}
                keyExtractor={(item) => `${item.id}`}
                contentContainerStyle={styles.container}
            />

        </View>



    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingLeft: 16,
        paddingRight: 16,

    },

});

export default Screen;
