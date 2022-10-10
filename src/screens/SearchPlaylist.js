import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';

import Colors from '../constants/Colors';
import HeaderBack from '../components/Header/HeaderBack';
import SearchBox from '../components/SearchBox/SearchBox';
import SongItem from '../components/SongItem/SongItem';

const SearchPlaylist = ({ route }) => {
    const { songs } = route.params;
    return (
        <View style={styles.container}>
            <HeaderBack style={{ backgroundColor: '#31322d', paddingVertical: 8 }}>
                <SearchBox
                    style={{ marginRight: 88 }}
                    placeholder="Tìm trong danh sách phát"
                    onPress={() => console.log('hello')}
                />
            </HeaderBack>

            <FlatList
                style={{ paddingBottom: 16, paddingTop: 16 }}
                data={songs}
                renderItem={({ item }) => <SongItem song={item} />}
                keyExtractor={(item) => item.id}
            />
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
