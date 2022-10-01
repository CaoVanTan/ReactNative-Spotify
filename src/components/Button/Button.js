import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const Button = (props) => {
    const { type, style, title, onPress } = props;

    return (
        <TouchableOpacity
            style={[
                styles.container,
                type == 'round' ? styles.round : null,
                type == 'square' ? styles.square : null,
                style,
            ]}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text style={[styles.title, type == 'square' ? styles.squareTitle : null]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    round: {
        marginHorizontal: 4,
        marginTop: 16,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        backgroundColor: Colors.dark.backgroundGray,
    },
    square: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(84, 84, 84, 1)',
        borderRadius: 4,
    },
    title: {
        color: Colors.dark.text,
        fontSize: 13,
    },
    squareTitle: {
        fontWeight: '500',
    },
});
