import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

import { AppContext } from './AppContext';
import PlayerWidget from './src/components/PlayerWidget/PlayerWidget';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {
    const [songId, setSongId] = useState(null);

    return (
        <AppContext.Provider
            value={{
                songId,
                setSongId: (id) => setSongId(id),
            }}
        >
            <NavigationContainer>
                <BottomTabNavigator />
                <PlayerWidget />
            </NavigationContainer>
        </AppContext.Provider>
    );
}
