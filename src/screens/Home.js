import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import Header from '../components/Header';

const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'default'} />
            <Header title="Chào buổi sáng">
                <View style={styles.badges}></View>
                <Feather style={{ marginRight: 10 }} name="bell" size={28} color="white" />
                <Feather style={{ marginHorizontal: 10 }} name="clock" size={28} color="white" />
                <AntDesign style={{ marginLeft: 10 }} name="setting" size={28} color="white" />
            </Header>
            <Text>Home</Text>
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
});
