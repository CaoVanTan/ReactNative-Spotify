import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import Header from '../components/Header/Header';
import SearchBox from '../components/SearchBox/SearchBox';
import SearchCategory from '../components/SearchCategory/SearchCategory';
import SearchCategories from '../data/SearchCategories';

const Search = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'default'} />

            <FlatList
                style={{ marginHorizontal: 8 }}
                data={SearchCategories}
                numColumns={2}
                renderItem={({ item }) => (
                    <SearchCategory
                        title={item.title}
                        style={{ backgroundColor: item.background }}
                        imageUri={item.imageUri}
                        onPress={() => navigation.navigate('SearchCategoriesScreen', { categories: item })}
                    />
                )}
                ListHeaderComponent={() => (
                    <View>
                        <Header title="Tìm kiếm" />
                        <SearchBox
                            type="disable-light"
                            style={{ marginVertical: 28, marginHorizontal: 8, backgroundColor: Colors.dark.text }}
                            styleText={{ color: Colors.dark.textGray, fontSize: 16 }}
                            placeholder="Bạn muốn nghe gì?"
                            onPress={() => navigation.navigate('SearchMusicScreen')}
                        />
                        <Text style={styles.title}>Duyệt tìm tất cả</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.dark.text,
        textAlign: 'center',
        marginBottom: 4,
    },
});
