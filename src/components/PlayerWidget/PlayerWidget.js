import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

import Colors from '../../constants/Colors';
import { AppContext } from '../../../AppContext';
import AlbumDetails from '../../data/AlbumDetails';

const PlayerWidget = () => {
    const [favourite, setFavourite] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState(undefined);
    const [duration, setDuration] = useState(undefined);
    const [position, setPosition] = useState(undefined);
    const [song, setSong] = useState(null);
    const { songId, setSongId } = useContext(AppContext);

    useEffect(() => {
        return sound
            ? () => {
                  sound.unloadAsync();
              }
            : undefined;
    }, [sound]);

    useEffect(() => {
        AlbumDetails.songs.map((item) => {
            if (item.id === songId) {
                setSong(item);
                return item;
            }
        });
    }, [songId]);

    useEffect(() => {
        if (song) {
            playCurrentSong();
        }
    }, [song]);

    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    };

    const playCurrentSong = async () => {
        const { sound } = await Audio.Sound.createAsync(song.uri, { shouldPlay: isPlaying }, onPlaybackStatusUpdate);
        setSound(sound);
        await sound.playAsync();
    };

    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }

        if (isPlaying) {
            await sound.stopAsync();
        } else {
            playCurrentSong();
        }
    };

    const getProgress = () => {
        if (sound === undefined || position === undefined || duration === undefined) {
            return 0;
        }

        return (position / duration) * 100;
    };

    // useEffect(() => {
    //     console.log(getProgress());
    //     const id = songId;
    //     if (getProgress() === 100) {
    //         id++;
    //         setSongId(id);
    //     }
    // }, [getProgress()]);

    return song ? (
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
                    onPress={onPlayPausePress}
                >
                    {isPlaying ? (
                        <Ionicons name="pause" size={22} color={Colors.dark.text} />
                    ) : (
                        <FontAwesome name="play" size={22} color={Colors.dark.text} />
                    )}
                </TouchableOpacity>
            </View>

            <View style={[styles.progress, { width: `${getProgress()}%` }]} />
        </View>
    ) : null;
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
    progress: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: 2,
        marginHorizontal: 8,
        backgroundColor: 'white',
    },
});
