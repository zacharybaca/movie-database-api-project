import "./generate-qr-code.css";
import {PasswordGeneratorContext} from "../../context/passwordGeneratorContext";
import React from "react";

export default function GenerateQRCode() {
    const context = React.useContext(PasswordGeneratorContext);

    
    return (
        <div id="qr-code-container">
            <img src={context.qrCode} alt="qr code" />
        </div>
    )
}