import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

import Colors from '../../constants/Colors';
import SearchBox from '../SearchBox/SearchBox';
import Button from '../Button/Button';
import { AppContext } from '../../../AppContext';

const AlbumHeader = (props) => {
    const { imageUri, artists, time } = props;
    const navigation = useNavigation();
    const { favourite, setFavourite, isPlaying, setIsPlaying } = useContext(AppContext);

    const text = artists.slice(-22);
    const artist = artists.slice(0, -22);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <SearchBox
                    type="disable"
                    placeholder="Tìm trong danh sách phát"
                    onPress={() => navigation.navigate('SearchPlaylistScreen')}
                />
                <Button
                    style={{ marginLeft: 8 }}
                    type="square"
                    title="Sắp xếp"
                    onPress={() => console.log('Clicked!')}
                />
            </View>
            <View style={styles.image}>
                <Image style={{ width: 200, height: 200 }} source={imageUri} />
            </View>
            <Text style={styles.artists}>
                {artist}
                <Text style={{ color: Colors.dark.textGray, fontSize: 14 }}>{text}</Text>
            </Text>
            <Text style={styles.text}>
                Dành riêng cho <Text style={{ color: Colors.dark.text, fontWeight: '500' }}>Cao Văn Tân</Text>
            </Text>
            {time ? <Text style={styles.text}>{time}</Text> : null}

            <View style={styles.wrapper}>
                <View style={styles.wrapperLeft}>
                    <TouchableWithoutFeedback onPress={() => setFavourite(!favourite)}>
                        {favourite ? (
                            <AntDesign style={{ marginRight: 32 }} name="heart" size={24} color={Colors.dark.green} />
                        ) : (
                            <AntDesign style={{ marginRight: 32 }} name="hearto" size={24} color={Colors.dark.text} />
                        )}
                    </TouchableWithoutFeedback>
                    <TouchableOpacity activeOpacity={0.4}>
                        <MaterialCommunityIcons name="dots-vertical" size={24} color={Colors.dark.textGray} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.wrapperRight}
                    activeOpacity={0.6}
                    onPress={() => setIsPlaying(!isPlaying)}
                >
                    <Entypo name={isPlaying ? 'controller-paus' : 'controller-play'} size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AlbumHeader;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginBottom: 16,
    },
    artists: {
        color: Colors.dark.text,
        fontSize: 14,
        marginBottom: 6,
    },
    text: {
        color: Colors.dark.textGray,
        fontSize: 14,
        marginBottom: 6,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    wrapperLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    wrapperRight: {
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark.green,
        borderRadius: 52,
    },
});
