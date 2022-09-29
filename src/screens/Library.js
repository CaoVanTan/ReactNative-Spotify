import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import Header from '../components/Header/Header';

const Library = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'default'} />
            <Header title="Thư viện" type="library">
                <Feather style={{ marginRight: 10 }} name="search" size={28} color="white" />
                <AntDesign style={{ marginLeft: 10 }} name="plus" size={28} color="white" />
            </Header>
        </View>
    );
};

export default Library;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
        flex: 1,
    },
});
