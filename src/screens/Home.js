import { FlatList, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';

import AlbumCategories from '../data/AlbumCategories';
import Colors from '../constants/Colors';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import AlbumCategory from '../components/AlbumCategory/AlbumCategory';

const Home = () => {
    const [notification, setNotification] = useState(true);

    const buttons = [
        {
            id: 1,
            title: 'Nhạc',
            onPress: () => console.log('Clicked '),
        },
        {
            id: 2,
            title: 'Podcast và chương trình',
            onPress: () => console.log('Clicked '),
        },
    ];

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'default'} />

            <View style={styles.wrapper}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={AlbumCategories}
                    renderItem={({ item }) => (
                        <AlbumCategory
                            // style={item.id == AlbumCategories.length && showWidget ? { marginBottom: 78 } : null}
                            title={item.title}
                            albums={item.albums}
                        />
                    )}
                    ListHeaderComponent={() => (
                        <View style={styles.wrapper}>
                            <Header title="Chào buổi sáng">
                                {notification ? <View style={styles.badges}></View> : null}
                                <TouchableOpacity activeOpacity={0.4}>
                                    <Feather style={{ marginRight: 10 }} name="bell" size={28} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.4}>
                                    <Feather style={{ marginHorizontal: 10 }} name="clock" size={28} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.4}>
                                    <AntDesign style={{ marginLeft: 10 }} name="setting" size={28} color="white" />
                                </TouchableOpacity>
                            </Header>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item) => item.id}
                                data={buttons}
                                renderItem={({ item }) => (
                                    <Button
                                        type="round"
                                        style={[
                                            item.id == 1 ? { marginLeft: 16 } : null,
                                            item.id == buttons.length ? { marginRight: 16 } : null,
                                        ]}
                                        title={item.title}
                                        onPress={item.onPress}
                                    />
                                )}
                            />
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
        flex: 1,
    },
    badges: {
        position: 'absolute',
        top: 0,
        left: 1,
        width: 10,
        height: 10,
        borderWidth: 2,
        borderColor: Colors.dark.background,
        borderRadius: 16,
        backgroundColor: '#4688d6',
        zIndex: 1,
    },
    wrapper: {},
});
