import React from "react";
import { PasswordCriteriaContext } from "../../context/passwordCriteriaContext";
import './password-criteria.css';

export default function PasswordCriteria() {
    const context = React.useContext(PasswordCriteriaContext);
    
    return (
        <div id="password-criteria-container">
            <h1>Password Criteria</h1>
        </div>
    )
}
