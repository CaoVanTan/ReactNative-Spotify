import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const width = Dimensions.get('screen').width / 2 - 24;

const SearchCategory = (props) => {
    const { title, style, imageUri, onPress } = props;

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={[styles.container, style]}>
                <Text style={styles.title}>{title}</Text>
                <Image style={styles.image} source={imageUri} />
            </View>
        </TouchableOpacity>
    );
};

export default SearchCategory;

const styles = StyleSheet.create({
    container: {
        height: 90,
        width: width,
        marginHorizontal: 8,
        marginVertical: 8,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    title: {
        width: '50%',
        marginLeft: 8,
        marginTop: 12,
        color: Colors.dark.text,
        fontSize: 16,
        fontWeight: '500',
        textTransform: 'capitalize',
    },
    image: {
        height: 65,
        width: 65,
        borderRadius: 8,
        transform: [{ rotate: '25deg' }, { translateX: 26 }, { translateY: 12 }],
    },
});
