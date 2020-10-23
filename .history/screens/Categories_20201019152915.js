import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import CategoryListItem from '../components/categoryListItem'
const Screen = ({ navigation }) => {
    const [categories, setCategories] = useState([
        {
            id: 1, name: "name 1444"
        },
        {
            id: 2, name: "name 2"
        },
        {
            id: 3, name: "name 3"
        }])
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
