import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constants/Colors';

const Album = (props) => {
    const { data, style, size } = props;
    const navigation = useNavigation();

    return (
        <TouchableHighlight
            activeOpacity={0.7}
            underlayColor={Colors.dark.background}
            onPress={() =>
                navigation.navigate('AlbumScreen', {
                    id: data.id,
                    title: data.name,
                    imageUri: data.imageUri,
                    artists: data.artists || data.author,
                    time: data.time,
                    songs: data.songs,
                })
            }
        >
            <View style={[styles.container, style]}>
                <Image style={{ width: size, height: size, marginBottom: 8 }} source={data.imageUri} />
                {data.job && (
                    <Text style={[styles.job, { width: size }]} numberOfLines={1} ellipsizeMode="tail">
                        {data.job}
                    </Text>
                )}
                {(data.name || data.title) && (
                    <Text style={[styles.name, { width: size }]} numberOfLines={1} ellipsizeMode="tail">
                        {data.name || data.title}
                    </Text>
                )}
                <Text style={[styles.artist, { width: size }]} numberOfLines={2} ellipsizeMode="tail">
                    {/* Hiện •  */}
                    {data.artists || data.author}
                </Text>
            </View>
        </TouchableHighlight>
    );
};

export default Album;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginHorizontal: 8,
    },
    job: {
        color: Colors.dark.green,
        fontSize: 10,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    name: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    artist: {
        color: Colors.dark.textGray,
        fontSize: 13,
    },
});
