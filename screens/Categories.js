import React, { useEffect, } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import CategoryListItem from '../components/categoryListItem'

import { useSpin } from '../ultil'

const Screen = ({ navigation }) => {
    const { categories, loading } = useSelector(state => state.categoriesStore)
    const dispatch = useDispatch()
    const Spin = useSpin()

    // console.log('category', categories)
    useEffect(() => {
        dispatch({
            type: 'GET_DATA_CATEGORY'
        })
    }, [])
    const renderFooter = () => {
        if (!loading) return null
        return (
            //Footer View with Load More button
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                {Spin}
            </View>
        );
    }
    return (
        <View>


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
                ListFooterComponent={renderFooter}
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
