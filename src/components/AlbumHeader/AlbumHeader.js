import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import AlbumDetails from '../../data/AlbumDetails';
import Colors from '../../constants/Colors';
import Search from '../Search/Search';
import Button from '../Button/Button';
import { useNavigation } from '@react-navigation/native';

const AlbumHeader = () => {
    const navigation = useNavigation();
    const [favourite, setFavourite] = useState(false);
    const [play, setPlay] = useState(false);

    const text = AlbumDetails.artist.slice(-22);
    const artist = AlbumDetails.artist.slice(0, -22);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Search
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
                <Image style={{ width: 200, height: 200 }} source={AlbumDetails.imageUri} />
            </View>
            <Text style={styles.artists}>
                {artist}
                <Text style={{ color: Colors.dark.textGray, fontSize: 14 }}>{text}</Text>
            </Text>
            <Text style={styles.text}>
                Dành riêng cho <Text style={{ color: Colors.dark.text, fontWeight: '500' }}>Cao Văn Tân</Text>
            </Text>
            <Text style={styles.text}>{AlbumDetails.time}</Text>

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

                <TouchableHighlight
                    style={{ borderRadius: 52 }}
                    activeOpacity={0.7}
                    underlayColor={Colors.dark.background}
                    onPress={() => setPlay(!play)}
                >
                    <View style={styles.wrapperRight}>
                        {play ? (
                            <Ionicons name="pause" size={24} color="black" />
                        ) : (
                            <FontAwesome style={{ marginLeft: 4 }} name="play" size={24} color="black" />
                        )}
                    </View>
                </TouchableHighlight>
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
