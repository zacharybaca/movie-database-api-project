import React from "react";
import { PasswordGeneratorContext } from "../../context/passwordGeneratorContext";
import './generated-password.css';

export default function GeneratedPassword() {
    const context = React.useContext(PasswordGeneratorContext);
    
    return (
        <div id="password-container">
            <h1>Generated Password</h1>
        </div>
    )
}
