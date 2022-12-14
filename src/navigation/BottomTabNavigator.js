import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import HomeNavigator from './HomeNavigator';
import Library from '../screens/Library';
import Premium from '../screens/Premium';
import SearchNavigator from './SearchNavigator';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={() => (
                <LinearGradient colors={Colors.dark.backgroundTabBar}>
                    <View style={{ height: 56 }}></View>
                </LinearGradient>
            )}
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                // tabBarHideOnKeyboard: true,
                // unmountOnBlur: true,
                // tabBarActiveTintColor: Colors.dark.tabIconSelected,
                // tabBarLabelStyle: {
                //     marginBottom: 3,
                // },
                // tabBarStyle: {
                //     backgroundColor: Colors.dark.background,
                // },
                // tabBarIcon: ({ focused }) => {
                //     let colorIcon = focused ? Colors.dark.tabIconSelected : Colors.dark.tabIconDefault;
                //     if (route.name === 'Home') {
                //         return <Entypo style={{ marginBottom: -3 }} name="home" size={26} color={colorIcon} />;
                //     } else if (route.name === 'Search') {
                //         return <Feather style={{ marginBottom: -3 }} name="search" size={26} color={colorIcon} />;
                //     } else if (route.name === 'Library') {
                //         return <MaterialIcons name="library-music" size={26} color={colorIcon} />;
                //     } else if (route.name === 'Premium') {
                //         return <FontAwesome5 style={{ marginBottom: -3 }} name="spotify" size={26} color={colorIcon} />;
                //     }
                // },
            })}
        >
            <Tab.Screen name="Home" component={HomeNavigator} options={{ headerShown: false, title: 'Trang ch???' }} />
            <Tab.Screen name="Search" component={SearchNavigator} options={{ headerShown: false, title: 'T??m ki???m' }} />
            <Tab.Screen name="Library" component={Library} options={{ headerShown: false, title: 'Th?? vi???n' }} />
            <Tab.Screen name="Premium" component={Premium} options={{ headerShown: false, title: 'Premium' }} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
