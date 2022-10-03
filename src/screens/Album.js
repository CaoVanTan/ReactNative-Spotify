import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/Colors';
import HeaderBack from '../components/Header/HeaderBack';
import SongItem from '../components/SongItem/SongItem';
import AlbumHeader from '../components/AlbumHeader/AlbumHeader';

const Album = (props) => {
    const route = useRoute();
    const { title, imageUri, artists, time, songs } = route.params;

    return (
        <View style={styles.container}>
            <FlatList
                data={songs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <SongItem song={item} />}
                ListHeaderComponent={() => (
                    <LinearGradient colors={['#535353', '#121212']}>
                        <HeaderBack title={title} />
                        <AlbumHeader imageUri={imageUri} artists={artists} time={time} />
                    </LinearGradient>
                )}
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
