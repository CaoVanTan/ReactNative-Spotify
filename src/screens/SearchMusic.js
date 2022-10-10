import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import HeaderBack from '../components/Header/HeaderBack';

const SearchMusic = () => {
    return (
        <View style={styles.container}>
            <HeaderBack style={{ backgroundColor: Colors.dark.backgroundHeader1 }}>
                <View style={styles.wrapperInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Bạn muốn nghe gì?"
                        placeholderTextColor={Colors.dark.text}
                        autoFocus
                    />
                    <TouchableOpacity activeOpacity={0.6}>
                        <Feather name="camera" size={24} color={Colors.dark.text} />
                    </TouchableOpacity>
                </View>
            </HeaderBack>
            <View style={styles.wrapper}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.dark.text, marginBottom: 8 }}>
                    Phát nội dung bạn thích
                </Text>
                <Text style={{ color: Colors.dark.textGray, textAlign: 'center', marginHorizontal: 32 }}>
                    Tìm kiếm nghệ sĩ, bài hát, podcasts và nhiều nội dung khác.
                </Text>
            </View>
        </View>
    );
};

export default SearchMusic;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
        flex: 1,
    },
    wrapperInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 52,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 6,
        backgroundColor: Colors.dark.backgroundSearch,
    },
    input: {
        width: '90%',
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.dark.text,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 56,
    },
});
