import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { AppContext } from '../../../AppContext';

const SongItem = (props) => {
    const { song } = props;
    const { songId, setSongId } = useContext(AppContext);

    const onPlay = () => {
        setSongId(song.id);
    };

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPlay}>
            <View style={styles.container}>
                <Image style={styles.image} source={song.imageUri} />
                <View style={styles.wrapper}>
                    <Text
                        style={[styles.name, songId == song.id ? { color: Colors.dark.green } : null]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {song.name}
                    </Text>
                    <Text style={styles.artist} numberOfLines={1} ellipsizeMode="tail">
                        {song.artists}
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.4}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color={Colors.dark.textGray} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default SongItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginBottom: 16,
    },
    image: {
        height: 48,
        width: 48,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: 12,
    },
    name: {
        fontSize: 16,
        color: Colors.dark.text,
        width: '95%',
        marginBottom: 4,
    },
    artist: {
        fontSize: 12,
        color: Colors.dark.textGray,
        width: '95%',
    },
});
