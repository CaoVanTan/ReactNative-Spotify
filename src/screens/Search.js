import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';

import Colors from '../constants/Colors';
import Header from '../components/Header/Header';

const Search = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'default'} />
            <Header title="Tìm kiếm" />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
        flex: 1,
    },
});
