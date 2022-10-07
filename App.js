import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

import { AppContext } from './AppContext';
import PlayerWidget from './src/components/PlayerWidget/PlayerWidget';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {
    const [songId, setSongId] = useState(null);
    const [favourite, setFavourite] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <AppContext.Provider
            value={{
                songId,
                setSongId: (id) => setSongId(id),
                favourite,
                setFavourite: (favourite) => setFavourite(favourite),
                isPlaying,
                setIsPlaying: (isPlaying) => setIsPlaying(isPlaying),
            }}
        >
            <NavigationContainer>
                <BottomTabNavigator />
                <PlayerWidget />
            </NavigationContainer>
        </AppContext.Provider>
    );
}
