import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const Header = (props) => {
    const { title, children, type } = props;

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {type == 'library' ? (
                    <Image style={styles.avatar} source={require('../../../assets/avatar.png')} />
                ) : null}
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.wrapper}>{children}</View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 36,
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 32,
        marginRight: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.dark.text,
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
});
