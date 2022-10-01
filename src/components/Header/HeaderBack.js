import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const HeaderBack = (props) => {
    const { title, children, style } = props;
    const navigation = useNavigation();
    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity style={{ marginRight: 32 }} activeOpacity={0.5} onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={28} color="white" />
            </TouchableOpacity>
            {title ? <Text style={styles.title}>{title}</Text> : null}
            <View>{children}</View>
        </View>
    );
};

export default HeaderBack;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 56,
        paddingHorizontal: 16,
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.dark.text,
    },
});
