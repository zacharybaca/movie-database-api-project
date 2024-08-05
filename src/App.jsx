import GeneratedPassword from "./components/GeneratedPassword/GeneratedPassword";
import PasswordCriteria from "./components/PasswordCriteria/PasswordCriteria";
import PasswordChecker from "./components/PasswordChecker/PasswordChecker";
import GenerateQRCode from "./components/GenerateQRCode/GenerateQRCode";
import { PasswordGeneratorContextProvider } from './context/passwordGeneratorContext';
import { PasswordCriteriaContextProvider } from './context/passwordCriteriaContext';
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  

  return (
    <div id="main-container">
      <Routes>
        <Route exact path="/" element={<PasswordChecker />} />
        <Route path="/generate-qr-code" element={
          <>
            <PasswordGeneratorContextProvider>
              <GenerateQRCode />
            </PasswordGeneratorContextProvider>
          </>
        }
        />
        <Route
          path="/change-password"
          element={
            <>
              
              <PasswordCriteriaContextProvider>
                <PasswordGeneratorContextProvider>
                  <GeneratedPassword />
                  <PasswordCriteria />
                </PasswordGeneratorContextProvider>
              </PasswordCriteriaContextProvider>
              
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App
