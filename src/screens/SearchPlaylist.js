import { StyleSheet, View } from 'react-native';
import React from 'react';

import Colors from '../constants/Colors';
import HeaderBack from '../components/Header/HeaderBack';
import Search from '../components/Search/Search';

const SearchPlaylist = () => {
    return (
        <View style={styles.container}>
            <HeaderBack style={{ backgroundColor: '#31322d', paddingVertical: 8 }}>
                <Search
                    style={{ marginRight: 88 }}
                    placeholder="Tìm trong danh sách phát"
                    onPress={() => console.log('hello')}
                />
            </HeaderBack>
        </View>
    );
};

export default SearchPlaylist;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
        flex: 1,
    },
});
