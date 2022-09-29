import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import Header from '../components/Header/Header';
import Album from '../components/Album/Album';
import Button from '../components/Button/Button';

const Home = () => {
    const data = {
        songs: [
            {
                id: 1,
                name: 'Hoa Hải đường',
                imageUri: require('../../assets/songs-image/HoaHaiDuong.jpg'),
                artists: 'Jack - J97',
            },
            {
                id: 2,
                name: 'Ngôi Sao Cô Đơn',
                imageUri: require('../../assets/songs-image/NgoiSaoCoDon.jpg'),
                artists: 'Jack - J97',
            },
            {
                id: 3,
                name: 'Hoa Hải đường',
                imageUri: require('../../assets/songs-image/HoaHaiDuong.jpg'),
                artists: 'Jack - J97',
            },
            {
                id: 4,
                name: 'Ngôi Sao Cô Đơn',
                imageUri: require('../../assets/songs-image/NgoiSaoCoDon.jpg'),
                artists: 'Jack - J97',
            },
            {
                id: 5,
                name: 'Hoa Hải đường',
                imageUri: require('../../assets/songs-image/HoaHaiDuong.jpg'),
                artists: 'Jack - J97',
            },
            {
                id: 6,
                name: 'Ngôi Sao Cô Đơn',
                imageUri: require('../../assets/songs-image/NgoiSaoCoDon.jpg'),
                artists: 'Jack - J97',
            },
        ],
        program: [
            {
                id: 1,
                name: 'Hoa Hải đường',
                imageUri: require('../../assets/songs-image/HoaHaiDuong.jpg'),
                author: 'Jack - J97',
                job: 'Giáo dục',
            },
            {
                id: 2,
                name: 'Ngôi Sao Cô Đơn',
                imageUri: require('../../assets/songs-image/NgoiSaoCoDon.jpg'),
                author: 'Jack - J97',
                job: 'Giáo dục',
            },
            {
                id: 3,
                name: 'Hoa Hải đường',
                imageUri: require('../../assets/songs-image/HoaHaiDuong.jpg'),
                author: 'Jack - J97',
                job: 'Giáo dục',
            },
            {
                id: 4,
                name: 'Ngôi Sao Cô Đơn',
                imageUri: require('../../assets/songs-image/NgoiSaoCoDon.jpg'),
                author: 'Jack - J97',
                job: 'Giáo dục',
            },
            {
                id: 5,
                name: 'Hoa Hải đường',
                imageUri: require('../../assets/songs-image/HoaHaiDuong.jpg'),
                author: 'Jack - J97',
                job: 'Giáo dục',
            },
            {
                id: 6,
                name: 'Ngôi Sao Cô Đơn',
                imageUri: require('../../assets/songs-image/NgoiSaoCoDon.jpg'),
                author: 'Jack - J97',
                job: 'Giáo dục',
            },
        ],
        buttons: [
            {
                id: 1,
                title: 'Nhạc',
                onPress: () => console.log('Clicked ', title),
            },
            {
                id: 2,
                title: 'Podcast và chương trình',
                onPress: () => console.log('Clicked ', title),
            },
        ],
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar barStyle={'default'} />

                <Header title="Chào buổi sáng">
                    <View style={styles.badges}></View>
                    <Feather style={{ marginRight: 10 }} name="bell" size={28} color="white" />
                    <Feather style={{ marginHorizontal: 10 }} name="clock" size={28} color="white" />
                    <AntDesign style={{ marginLeft: 10 }} name="setting" size={28} color="white" />
                </Header>

                <View style={styles.wrapper}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        data={data.buttons}
                        renderItem={({ item }) => (
                            <Button
                                type="round"
                                style={[
                                    item.id == 1 ? { marginLeft: 16 } : null,
                                    item.id == data.buttons.length ? { marginRight: 16 } : null,
                                ]}
                                title={item.title}
                                onPress={item.onPress}
                            />
                        )}
                    />
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.title}>Mới phát gần đây</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        data={data.songs}
                        renderItem={({ item }) => (
                            <Album
                                data={item}
                                style={[
                                    item.id == 1 ? { marginLeft: 16 } : null,
                                    item.id == data.songs.length ? { marginRight: 16 } : null,
                                ]}
                                size={110}
                            />
                        )}
                    />
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.title}>Tuyển tập hàng đầu của bạn</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        data={data.songs}
                        renderItem={({ item }) => (
                            <Album
                                data={item}
                                type="playlist"
                                style={[
                                    item.id == 1 ? { marginLeft: 16 } : null,
                                    item.id == data.songs.length ? { marginRight: 16 } : null,
                                ]}
                                size={142}
                            />
                        )}
                    />
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.title}>Dành Cho Cao Văn Tân</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        data={data.songs}
                        renderItem={({ item }) => (
                            <Album
                                data={item}
                                type="playlist"
                                style={[
                                    item.id == 1 ? { marginLeft: 16 } : null,
                                    item.id == data.songs.length ? { marginRight: 16 } : null,
                                ]}
                                size={142}
                            />
                        )}
                    />
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.title}>Tuyển tập nhạc hay nhất của các nghệ sĩ</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        data={data.songs}
                        renderItem={({ item }) => (
                            <Album
                                data={item}
                                type="playlist"
                                style={[
                                    item.id == 1 ? { marginLeft: 16 } : null,
                                    item.id == data.songs.length ? { marginRight: 16 } : null,
                                ]}
                                size={142}
                            />
                        )}
                    />
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.title}>Chương trình đáng để thử</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        data={data.program}
                        renderItem={({ item }) => (
                            <Album
                                data={item}
                                type="program"
                                style={[
                                    item.id == 1 ? { marginLeft: 16 } : null,
                                    item.id == data.program.length ? { marginRight: 16 } : null,
                                ]}
                                size={142}
                            />
                        )}
                    />
                </View>
            </ScrollView>
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
    wrapper: {
        marginTop: 8,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
});
