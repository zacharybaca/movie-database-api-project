import "./generate-qr-code.css";
import {PasswordGeneratorContext} from "../../context/passwordGeneratorContext";
import React from "react";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";


export default function GenerateQRCode() {
    const context = React.useContext(PasswordGeneratorContext);
    
     
    
    
    return (
        <div id="qr-code-container">
            <QRCode value={context.generatedPassword} />
            <div id="back-button-container">
                <Link to="/"><button type="button" id="check-another-button">Check Another Password</button></Link>
            </div>
        </div>
    )
}