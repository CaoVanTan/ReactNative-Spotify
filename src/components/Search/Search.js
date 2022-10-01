import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const Search = (props) => {
    const { type, placeholder, onPress, style } = props;

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, style]}>
                <Feather name="search" size={20} color={Colors.dark.text} />
                <TextInput
                    style={styles.textInput}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.dark.text}
                    selectionColor={Colors.dark.green}
                    editable={type == 'disable' ? false : true}
                    autoFocus
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: 'rgba(84, 84, 84, 1)',
        borderRadius: 4,
    },
    textInput: {
        marginLeft: 8,
        fontWeight: '500',
        width: '100%',
    },
});
