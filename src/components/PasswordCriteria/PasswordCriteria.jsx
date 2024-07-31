import { PasswordCriteriaContextProvider } from '../../context/passwordCriteriaContext';
import './password-criteria.css';

export default function PasswordCriteria() {
    return (
        <div id="password-criteria-container">
            <PasswordCriteriaContextProvider>
                
            </PasswordCriteriaContextProvider>
        </div>
    )
}
