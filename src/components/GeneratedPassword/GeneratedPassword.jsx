import React from "react";
import { PasswordGeneratorContext } from "../../context/passwordGeneratorContext";
import './generated-password.css';

export default function GeneratedPassword() {
    const context = React.useContext(PasswordGeneratorContext);
    console.log('Context Pass: ', context)
    return (
        <div id="password-container">
            {context.generatedPassword && <h1>Your New Secure Password: </h1>}
            <br />
            {context.generatedPassword ? <h1 id="secure-password">{context.generatedPassword}</h1> : <h1>Your Generated Password Will Appear Here</h1>}
        </div>
    )
}
