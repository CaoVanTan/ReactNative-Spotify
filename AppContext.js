import React from 'react';

const context = {
    songId: null,
    setSongId: () => {},
    favourite: false,
    setFavourite: () => {},
    isPlaying: false,
    setIsPlaying: () => {},
};

export const AppContext = React.createContext(context);
