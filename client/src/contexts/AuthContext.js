import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    // normally this would come from an auth token
    // user id of "logged in" user
    const authId = 0; // user id of default "logged in" user
    return (
        <AuthContext.Provider value={{ isAuthenticated: true, authId }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
