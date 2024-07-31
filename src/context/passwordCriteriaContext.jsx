/* eslint-disable react/prop-types */
import React from 'react';

const PasswordCriteriaContext = React.createContext();


function PasswordCriteriaContextProvider(props) {
    return (
        <PasswordCriteriaContext.Provider>
            {props.children}
        </PasswordCriteriaContext.Provider>
    )
}

export {PasswordCriteriaContext, PasswordCriteriaContextProvider};
