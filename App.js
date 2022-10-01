import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import PlayerWidget from './src/components/PlayerWidget/PlayerWidget';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import AlbumDetails from './src/data/AlbumDetails';

export default function App() {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
            <PlayerWidget song={AlbumDetails.songs[1]} />
        </NavigationContainer>
    );
}
