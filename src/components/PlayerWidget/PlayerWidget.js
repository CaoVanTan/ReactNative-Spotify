import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

import Colors from '../../constants/Colors';

const PlayerWidget = (props) => {
    const { song } = props;
    const [favourite, setFavourite] = useState(false);
    const [play, setPlay] = useState(false);
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={song.imageUri} />
            <View style={styles.wrapper}>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                    {song.name}
                </Text>
                <Text style={styles.artist} numberOfLines={1} ellipsizeMode="tail">
                    {song.artist}
                </Text>
            </View>
            <View style={styles.wrapperAction}>
                <TouchableOpacity
                    style={{ marginHorizontal: 12 }}
                    activeOpacity={0.4}
                    onPress={() => setFavourite(!favourite)}
                >
                    {favourite ? (
                        <AntDesign name="heart" size={24} color={Colors.dark.green} />
                    ) : (
                        <AntDesign name="hearto" size={24} color={Colors.dark.text} />
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginHorizontal: 12, width: 22, justifyContent: 'center', alignItems: 'center' }}
                    activeOpacity={0.4}
                    onPress={() => setPlay(!play)}
                >
                    {play ? (
                        <Ionicons name="pause" size={22} color={Colors.dark.text} />
                    ) : (
                        <FontAwesome name="play" size={22} color={Colors.dark.text} />
                    )}
                </TouchableOpacity>
            </View>

            <View style={styles.timeline}>
                <Slider
                    style={{ width: '100%', height: 1 }}
                    minimumValue={0}
                    maximumValue={100}
                    minimumTrackTintColor="#fff"
                    maximumTrackTintColor="#000"
                />
            </View>
        </View>
    );
};

export default PlayerWidget;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        marginHorizontal: 8,
        marginBottom: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: Colors.dark.backgroundWidget,
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 4,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: 12,
    },
    name: {
        fontSize: 13,
        fontWeight: '500',
        color: Colors.dark.text,
        width: '95%',
    },
    artist: {
        fontSize: 13,
        color: Colors.dark.textGray,
        width: '95%',
    },
    wrapperAction: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeline: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        marginHorizontal: -8,
    },
});
