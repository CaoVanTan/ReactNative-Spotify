import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import Colors from '../constants/Colors';
import AlbumDetails from '../data/AlbumDetails';
import HeaderBack from '../components/Header/HeaderBack';
import SongItem from '../components/SongItem/SongItem';
import AlbumHeader from '../components/AlbumHeader/AlbumHeader';

const Album = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    const { title } = route.params;

    return (
        <View style={styles.container}>
            <HeaderBack title={title} navigation={navigation} />
            <FlatList
                data={AlbumDetails.songs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <SongItem song={item} />}
                ListHeaderComponent={() => <AlbumHeader />}
            />
        </View>
    );
};

export default Album;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
        flex: 1,
    },
});
