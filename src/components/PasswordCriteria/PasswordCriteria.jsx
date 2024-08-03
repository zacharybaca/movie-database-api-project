import React from "react";
import { PasswordCriteriaContext } from "../../context/passwordCriteriaContext";
import './password-criteria.css';

export default function PasswordCriteria() {
    const context = React.useContext(PasswordCriteriaContext);
    
    return (
        <div id="password-criteria-container">
            <h1>Select Your Password Requirements</h1>
            <form id="criteria-form" name="criteria-form">
                <div id="numbers-container">
                    <label htmlFor="numbersRequired">Require Numbers </label>
                    <input type="checkbox" id="numbers" name="numbersRequired" onChange={context.handleChange} checked={context.criteria.numbersRequired}/>
                </div>
                <div id="special-container">
                    <label htmlFor="specialCharactersRequired">Require Special Characters </label>
                    <input type="checkbox" id="special" name="specialCharactersRequired" onChange={context.handleChange} checked={context.criteria.specialCharactersRequired}/>
                </div>
                <div id="amount-container">
                    <label htmlFor="passwordLength">Number of Characters Required </label>
                    <input type="range" id="amount" name="passwordLength" min="5" max="20" step="1" onChange={context.handleChange} value={context.criteria.passwordLength}/>
                </div>
            </form>
            <div id="button-container">
                <button type="button">Generate Secure Password</button>
            </div>
        </div>
    )
}
