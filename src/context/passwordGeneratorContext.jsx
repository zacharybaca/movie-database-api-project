/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from 'react';

const PasswordGeneratorContext = React.createContext();

function PasswordGeneratorContextProvider(props) {

    return (
        <PasswordGeneratorContext.Provider>
            {props.children}
        </PasswordGeneratorContext.Provider>
    )
}

export {PasswordGeneratorContext, PasswordGeneratorContextProvider}
