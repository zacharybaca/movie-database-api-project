/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from 'react';
import QRCode from "qrcode";
import { PasswordCriteriaContext } from "./passwordCriteriaContext";

const PasswordGeneratorContext = React.createContext();


function PasswordGeneratorContextProvider(props) {
    const context = React.useContext(PasswordCriteriaContext);
    const [securePassword, setSecurePassword] = React.useState("");
    const [qrCode, setQRCode] = React.useState("");

    
    const generateSecurePassword = async() => {
       const response = await fetch(
         `https://api.api-ninjas.com/v1/passwordgenerator?length=${context.criteria.passwordLength}&exclude_numbers=${context.criteria.numbersRequired}&exclude_special_chars=${context.criteria.specialCharactersRequired}`,
         {
           method: "GET",
           headers: {
             "X-Api-Key": "vH/WOl57zKNu7HSmUdgiCQ==huhnSVkUG5Wql9hO",
           },
         }
       );
        const result = await response.json();
        setSecurePassword(result.random_password);
    }
    
    const generateQRCode = async() => {
         try {
          const generatedCode = await QRCode.toDataURL(securePassword);
           console.log(generatedCode);
           setQRCode(generatedCode);
         } catch (err) {
           console.error(err);
         }
    }

    return (
        <PasswordGeneratorContext.Provider value = {{
            generate: generateSecurePassword,
            generatedPassword: securePassword,
            generateQRCode: generateQRCode,
            qrCode: qrCode
        }}>
            {props.children}
        </PasswordGeneratorContext.Provider>
    )
}

export {PasswordGeneratorContext, PasswordGeneratorContextProvider}
