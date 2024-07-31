import React from "react";
import { GeneratedPasswordContext } from "../../context/passwordGeneratorContext";
import './generated-password.css';

export default function GeneratedPassword() {
    const context = React.useContext(GeneratedPasswordContext);
    
    return (
        <div id="password-container">
            <h1>Generated Password</h1>
        </div>
    )
}
