import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

import Album from '../Album/Album';

const AlbumCategory = (props) => {
    const { title, albums } = props;

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={albums}
                renderItem={({ item }) => (
                    <Album
                        data={item}
                        style={[
                            item.id == 1 ? { marginLeft: 16 } : null,
                            item.id == albums.length ? { marginRight: 16 } : null,
                        ]}
                        size={142}
                    />
                )}
            />
        </View>
    );
};

export default AlbumCategory;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 12,
        marginBottom: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
});
