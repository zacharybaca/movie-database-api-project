import { PasswordGeneratorContextProvider } from '../../context/passwordGeneratorContext';
import './generated-password.css';

export default function GeneratedPassword() {
    return (
        <div id="password-container">
            <PasswordGeneratorContextProvider>
                
            </PasswordGeneratorContextProvider>
        </div>
    )
}
