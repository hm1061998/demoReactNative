import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, FlatList, Animated, View, Easing, ScrollView } from "react-native";
import axios from "axios";
import CategoryListItem from '../components/categoryListItem'



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
    return <Animated.Image
        style={{
            width: 'auto',
            height: 'auto',

            transform: [{ rotate: spin }]
        }}
        source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
    />
}
const Screen = ({ navigation }) => {
    const [categories, setCategories] = useState([])
    const [spinning, setSpinning] = useState(false)
    const Spin = useSpin()

    useEffect(() => {

        setSpinning(true)
        axios.get(`https://1e44eb994fa2.ngrok.io/category`)
            .then(res => {
                setCategories(res.data)
                setSpinning(false)
            })
            .catch(err => {
                console.log("err", err)
            })
    }, [])

    return (
        <View>
            {spinning && Spin}
            {!spinning && <FlatList
                data={categories}
                renderItem={({ item }) => <CategoryListItem category={item} onPress={() => navigation.navigate('Category',
                    {
                        categoryName: item.name,
                        title: item.name,
                        categoryId: item.id
                    })} />}
                keyExtractor={(item) => `${item.id}`}
                contentContainerStyle={styles.container}
            />}

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
