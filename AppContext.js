import React from 'react';

const context = {
    songId: null,
    setSongId: () => {},
};

export const AppContext = React.createContext(context);
