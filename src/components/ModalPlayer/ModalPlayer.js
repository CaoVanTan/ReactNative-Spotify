import { StyleSheet, Text, View, Modal, TouchableOpacity, Image, FlatList, Dimensions, Animated } from 'react-native';
import React, { useContext, useState, useRef, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, MaterialCommunityIcons, AntDesign, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

import Colors from '../../constants/Colors';
import { AppContext } from '../../../AppContext';
import AlbumDetails from '../../data/AlbumDetails';

const { width } = Dimensions.get('window');

const ModalPlayer = (props) => {
    const { song, visible, setModalVisible } = props;
    const [favourite, setFavourite] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRandom, setIsRandom] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const [songIndex, setSongIndex] = useState(0);
    const { songId } = useContext(AppContext);
    const scrollX = useRef(new Animated.Value(0)).current;
    const songSlider = useRef(null);

    useEffect(() => {
        scrollX.addListener(({ value }) => {
            const index = Math.round(value / width);
            setSongIndex(index);
        });

        return () => {
            scrollX.removeAllListeners();
        };
    }, []);

    const skipToNext = () => {
        songSlider.current.scrollToOffset({
            offset: (songIndex + 1) * width,
        });
    };

    const skipToPrevious = () => {
        songSlider.current.scrollToOffset({
            offset: (songIndex - 1) * width,
        });
    };

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
                    <View style={styles.mainContainer}>
                        <Animated.FlatList
                            style={{ width: width }}
                            ref={songSlider}
                            contentContainerStyle={{ marginVertical: 60 }}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            data={AlbumDetails}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <Animated.View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ width: 300, height: 300 }}>
                                        <Image style={{ width: '100%', height: '100%' }} source={item.imageUri} />
                                    </View>
                                </Animated.View>
                            )}
                            onScroll={Animated.event(
                                [
                                    {
                                        nativeEvent: {
                                            contentOffset: { x: scrollX },
                                        },
                                    },
                                ],
                                { useNativeDriver: true },
                            )}
                        />

                        <View style={styles.content}>
                            <View>
                                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                                    {AlbumDetails[songIndex].name}
                                </Text>
                                <Text style={styles.artist} numberOfLines={1} ellipsizeMode="tail">
                                    {AlbumDetails[songIndex].artist}
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
                            <View style={styles.progress}>
                                <Slider
                                    style={{}}
                                    value={0}
                                    minimumValue={0}
                                    maximumValue={100}
                                    thumbTintColor={Colors.dark.text}
                                    minimumTrackTintColor={Colors.dark.text}
                                    maximumTrackTintColor="rgba(255, 255, 255, 0.9)"
                                    onSlidingComplete={() => {}}
                                />
                                <View style={styles.progressLabel}>
                                    <Text style={styles.progressLabelTxt}>0:00</Text>
                                    <Text style={styles.progressLabelTxt}>3:22</Text>
                                </View>
                            </View>
                            <View style={styles.controller}>
                                <TouchableOpacity activeOpacity={0.5} onPress={() => setIsRandom(!isRandom)}>
                                    <FontAwesome
                                        name="random"
                                        size={20}
                                        color={isRandom ? Colors.dark.green : Colors.dark.text}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ marginLeft: 12 }}
                                    activeOpacity={songIndex == 0 ? 1 : 0.5}
                                    onPress={skipToPrevious}
                                >
                                    <Entypo
                                        name="controller-jump-to-start"
                                        size={36}
                                        color={songIndex == 0 ? Colors.dark.disable : Colors.dark.text}
                                    />
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
                                <TouchableOpacity
                                    style={{ marginRight: 12 }}
                                    activeOpacity={songIndex == AlbumDetails.length - 1 ? 1 : 0.5}
                                    onPress={skipToNext}
                                >
                                    <Entypo
                                        name="controller-next"
                                        size={36}
                                        color={
                                            songIndex == AlbumDetails.length - 1
                                                ? Colors.dark.disable
                                                : Colors.dark.text
                                        }
                                    />
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
        paddingTop: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 32,
    },
    name: {
        color: Colors.dark.text,
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 4,
        lineHeight: 26,
        width: 240,
    },
    artist: {
        color: Colors.dark.textGray,
        fontSize: 16,
        lineHeight: 18,
    },
    controllerContainer: {
        marginTop: 16,
        marginHorizontal: 16,
    },
    progress: {
        marginHorizontal: 2,
    },
    progressLabel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
    },
    progressLabelTxt: {
        color: Colors.dark.textGray,
    },
    controller: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 16,
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
