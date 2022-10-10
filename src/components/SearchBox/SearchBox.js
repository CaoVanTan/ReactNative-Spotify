import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const SearchBox = (props) => {
    const { type, placeholder, onPress, style, styleText } = props;

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, style]}>
                <Feather
                    name="search"
                    size={type == 'disable-light' ? 24 : 20}
                    color={type == 'disable-light' ? Colors.dark.background : Colors.dark.text}
                />
                <TextInput
                    style={[styles.textInput, styleText]}
                    placeholder={placeholder}
                    placeholderTextColor={type == 'disable-light' ? '#545454' : Colors.dark.text}
                    selectionColor={Colors.dark.green}
                    editable={type == 'disable' || type == 'disable-light' ? false : true}
                    autoFocus
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default SearchBox;

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
        color: Colors.dark.text,
    },
});
