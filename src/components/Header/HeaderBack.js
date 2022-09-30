import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const HeaderBack = (props) => {
    const { title, children, navigation } = props;
    return (
        <View style={styles.container}>
            <View style={styles.wrapperLeft}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={28} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View>{children}</View>
        </View>
    );
};

export default HeaderBack;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 56,
        paddingHorizontal: 16,
        backgroundColor: Colors.dark.backgroundHeader,
    },
    wrapperLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.dark.text,
        marginLeft: 32,
    },
});
