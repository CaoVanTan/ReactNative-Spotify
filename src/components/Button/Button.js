import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const Button = (props) => {
    const { type, style, title, onPress } = props;

    return (
        <TouchableOpacity
            style={[styles.container, type == 'round' ? { borderRadius: 16 } : null, style]}
            activeOpacity={0.3}
            onPress={onPress}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        marginTop: 16,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: Colors.dark.backgroundGray,
    },
    title: {
        color: Colors.dark.text,
        fontSize: 13,
    },
});
