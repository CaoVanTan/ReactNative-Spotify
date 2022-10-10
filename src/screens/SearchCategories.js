import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import HeaderBack from '../components/Header/HeaderBack';
import Colors from '../constants/Colors';
import AlbumCategory from '../components/AlbumCategory/AlbumCategory';

const SearchCategories = ({ route }) => {
    const { categories } = route.params;
    console.log(categories);
    return (
        <View style={styles.container}>
            <HeaderBack title={categories.title} style={{ backgroundColor: Colors.dark.backgroundHeader1 }} />

            <FlatList
                data={categories.category}
                renderItem={({ item }) => (
                    <AlbumCategory
                        title={item.title}
                        albums={item.albums}
                        styleTitle={{ fontSize: 18, textAlign: 'center', marginBottom: 8 }}
                    />
                )}
            />
        </View>
    );
};

export default SearchCategories;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
        flex: 1,
    },
});
