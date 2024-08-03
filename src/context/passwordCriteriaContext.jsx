/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
import React from 'react';

const PasswordCriteriaContext = React.createContext();


function PasswordCriteriaContextProvider(props) {

    const [criteria, setCriteria] = React.useState({
        numbersRequired: false,
        specialCharactersRequired: false,
        passwordLength: 0
    });

    function handleChange(e) {
        const { name, value, checked } = e.target;

        setCriteria(prevState => ({
            ...prevState,
            [name]: e.target.type === "checkbox" ? checked : value
        }))
        console.log(`Numbers Required: ${criteria.numbersRequired}, Special Characters Required: ${criteria.specialCharactersRequired}, Password Length: ${criteria.passwordLength}`)
    }

    return (
        <PasswordCriteriaContext.Provider value={{
            criteria: criteria,
            handleChange: handleChange
        }}>
            {props.children}
        </PasswordCriteriaContext.Provider>
    )
}

export {PasswordCriteriaContext, PasswordCriteriaContextProvider};
