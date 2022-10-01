import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Album from '../screens/Album';
import Home from '../screens/Home';
import SearchPlaylist from '../screens/SearchPlaylist';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="AlbumScreen"
                component={Album}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SearchPlaylistScreen"
                component={SearchPlaylist}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
