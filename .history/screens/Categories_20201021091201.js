import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, FlatList, Animated, View, Easing, ScrollView } from "react-native";
import axios from "axios";
import CategoryListItem from '../components/categoryListItem'
import ENV from '../ENV'
import { useSpin } from '../ultil'


const Screen = ({ navigation }) => {
    const [categories, setCategories] = useState([])
    const [spinning, setSpinning] = useState(false)
    const Spin = useSpin()

    useEffect(() => {

        setSpinning(true)
        axios.get(`${ENV.API_SERVER}/category`)
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
