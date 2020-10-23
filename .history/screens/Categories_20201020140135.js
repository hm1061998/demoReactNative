import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import axios from "axios";
import CategoryListItem from '../components/categoryListItem'
const Screen = ({ navigation }) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/category`)
            .then(res => {
                setCategories(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    // console.log(navigation)
    return (


        <FlatList
            data={categories}
            renderItem={({ item }) => <CategoryListItem category={item} onPress={() => navigation.navigate('Category',
                {
                    categoryName: item.name,
                    title: item.name
                })} />}
            keyExtractor={(item) => `${item.id}`}
            contentContainerStyle={styles.container}
        />


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
