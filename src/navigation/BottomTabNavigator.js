import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Library from '../screens/Library';
import Premium from '../screens/Premium';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: Colors.dark.tabIconSelected,
                tabBarLabelStyle: {
                    marginBottom: 3,
                },
                tabBarStyle: {
                    backgroundColor: Colors.dark.background,
                },
                tabBarIcon: ({ focused }) => {
                    let colorIcon = focused ? Colors.dark.tabIconSelected : Colors.dark.tabIconDefault;
                    if (route.name === 'Home') {
                        return <Entypo style={{ marginBottom: -3 }} name="home" size={26} color={colorIcon} />;
                    } else if (route.name === 'Search') {
                        return <Feather style={{ marginBottom: -3 }} name="search" size={26} color={colorIcon} />;
                    } else if (route.name === 'Library') {
                        return <MaterialIcons name="library-music" size={26} color={colorIcon} />;
                    } else if (route.name === 'Premium') {
                        return <FontAwesome5 style={{ marginBottom: -3 }} name="spotify" size={26} color={colorIcon} />;
                    }
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false, title: 'Trang chủ' }} />
            <Tab.Screen name="Search" component={Search} options={{ headerShown: false, title: 'Tìm kiếm' }} />
            <Tab.Screen name="Library" component={Library} options={{ headerShown: false, title: 'Thư viện' }} />
            <Tab.Screen name="Premium" component={Premium} options={{ headerShown: false, title: 'Premium' }} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
