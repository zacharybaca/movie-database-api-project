/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from 'react';

const MovieDatabaseContext = React.createContext();

function MovieDatabaseContextProvider(props) {

    return (
        <MovieDatabaseContext.Provider>
            {props.children}
        </MovieDatabaseContext.Provider>
    )
}

export {MovieDatabaseContext, MovieDatabaseContextProvider}