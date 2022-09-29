import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const Album = (props) => {
    const { type, data, style, size } = props;

    return (
        <View style={[styles.container, style, type == 'program' ? { borderRadius: 16 } : null]}>
            <Image
                style={[
                    { width: size, height: size, marginBottom: 8 },
                    type == 'program' ? { borderRadius: 12 } : null,
                ]}
                source={data.imageUri}
            />
            {type == 'program' ? (
                <Text style={[styles.job, { width: size }]} numberOfLines={1} ellipsizeMode="tail">
                    {data.job}
                </Text>
            ) : null}
            {type == 'playlist' ? null : (
                <Text style={[styles.name, { width: size }]} numberOfLines={1} ellipsizeMode="tail">
                    {data.name}
                </Text>
            )}
            <Text style={[styles.artist, { width: size }]} numberOfLines={2} ellipsizeMode="tail">
                {data.artists || data.author}
            </Text>
        </View>
    );
};

export default Album;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginHorizontal: 8,
    },
    job: {
        color: Colors.dark.green,
        fontSize: 10,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    name: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    artist: {
        color: Colors.dark.textGray,
        fontSize: 14,
        flex: 1,
    },
});
