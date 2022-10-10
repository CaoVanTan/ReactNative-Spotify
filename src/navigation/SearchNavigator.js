import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Search from '../screens/Search';
import SearchMusic from '../screens/SearchMusic';
import SearchCategories from '../screens/SearchCategories';
import Album from '../screens/Album';

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SearchScreen"
                component={Search}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SearchMusicScreen"
                component={SearchMusic}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SearchCategoriesScreen"
                component={SearchCategories}
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
        </Stack.Navigator>
    );
};

export default SearchNavigator;

const styles = StyleSheet.create({});
