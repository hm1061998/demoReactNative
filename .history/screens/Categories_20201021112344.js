import React, { useState, useEffect, } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import CategoryListItem from '../components/categoryListItem'
import ENV from '../ENV'
import { useSpin } from '../ultil'

const Screen = ({ navigation }) => {
    const { categories, spinning } = useSelector(state => state.categoriesStore)
    console.log('categories', categories)
    const dispatch = useDispatch()
    const Spin = useSpin()

    useEffect(() => {
        dispatch({
            type: 'getDataCategory'
        })
    }, [])

    return (
        <View>
            {spinning && Spin}
            {!spinning &&
                <FlatList
                    data={categories}
                    renderItem={({ item }) =>
                        <CategoryListItem category={item}
                            onPress={() => navigation.navigate('Category',
                                {
                                    categoryName: item.name,
                                    title: item.name,
                                    categoryId: item.id
                                })}
                        />
                    }
                    keyExtractor={(item) => `${item.id}`}
                    contentContainerStyle={styles.container}
                />
            }
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
