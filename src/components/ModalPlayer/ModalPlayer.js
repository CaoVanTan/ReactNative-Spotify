import { StyleSheet, Text, View, Modal, TouchableOpacity, Image } from 'react-native';
import React, { useContext, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, MaterialCommunityIcons, AntDesign, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { AppContext } from '../../../AppContext';

const ModalPlayer = (props) => {
    const { song, visible, setModalVisible } = props;
    const [favourite, setFavourite] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRandom, setIsRandom] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const { songId } = useContext(AppContext);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setModalVisible(!visible);
            }}
        >
            <LinearGradient style={{ flex: 1 }} colors={['#535353', '#121212']}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => setModalVisible(!visible)}>
                            <Feather name="chevron-down" size={28} color={Colors.dark.text} />
                        </TouchableOpacity>
                        <Text style={{ color: Colors.dark.text, textTransform: 'uppercase' }}>
                            Đang phát từ danh sách phát
                        </Text>
                        <TouchableOpacity activeOpacity={0.4}>
                            <MaterialCommunityIcons name="dots-vertical" size={24} color={Colors.dark.text} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={{ marginVertical: 60, alignItems: 'center' }}>
                            <Image source={song.imageUri} />
                        </View>

                        <View style={styles.content}>
                            <View>
                                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                                    {song.name}
                                </Text>
                                <Text style={styles.artist} numberOfLines={1} ellipsizeMode="tail">
                                    {song.artist}
                                </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.4} onPress={() => setFavourite(!favourite)}>
                                <AntDesign
                                    name={favourite ? 'heart' : 'hearto'}
                                    size={24}
                                    color={favourite ? Colors.dark.green : Colors.dark.text}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.controllerContainer}>
                            <View style={styles.progress}></View>
                            <View style={styles.controller}>
                                <TouchableOpacity activeOpacity={0.5} onPress={() => setIsRandom(!isRandom)}>
                                    <FontAwesome
                                        name="random"
                                        size={20}
                                        color={isRandom ? Colors.dark.green : Colors.dark.text}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginLeft: 12 }} activeOpacity={0.5}>
                                    <Entypo name="controller-jump-to-start" size={36} color={Colors.dark.text} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.playAndPause}
                                    activeOpacity={0.5}
                                    onPress={() => setIsPlaying(!isPlaying)}
                                >
                                    <Entypo
                                        name={isPlaying ? 'controller-paus' : 'controller-play'}
                                        size={24}
                                        color="black"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 12 }} activeOpacity={0.5}>
                                    <Entypo name="controller-next" size={36} color={Colors.dark.text} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ marginRight: -4 }}
                                    activeOpacity={0.4}
                                    onPress={() => setIsRepeat(!isRepeat)}
                                >
                                    <MaterialIcons
                                        name="repeat"
                                        size={24}
                                        color={isRepeat ? Colors.dark.green : Colors.dark.text}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </Modal>
    );
};

export default ModalPlayer;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    name: {
        color: Colors.dark.text,
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 4,
    },
    artist: {
        color: Colors.dark.textGray,
        fontSize: 16,
    },
    controllerContainer: {
        marginTop: 16,
        marginHorizontal: 24,
    },
    progress: {},
    controller: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    playAndPause: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark.text,
        borderRadius: 56,
    },
});
