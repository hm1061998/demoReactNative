import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, FlatList, Animated, View } from "react-native";
import axios from "axios";
import CategoryListItem from '../components/categoryListItem'
const Screen = ({ navigation }) => {
    const [categories, setCategories] = useState([])
    const spin = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        axios.get(`https://1e44eb994fa2.ngrok.io/category`)
            .then(res => {
                setCategories(res.data)
            })
            .catch(err => {
                console.log("err", err)
            })
    }, [])

    return (
        <View>

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
