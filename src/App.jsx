import GeneratedPassword from "./components/GeneratedPassword/GeneratedPassword";
import PasswordCriteria from "./components/PasswordCriteria/PasswordCriteria";
import PasswordChecker from "./components/PasswordChecker/PasswordChecker";
import { PasswordGeneratorContextProvider } from './context/passwordGeneratorContext';
import { PasswordCriteriaContextProvider } from './context/passwordCriteriaContext';
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  

  return (
    <div id="main-container">
      <Routes>
        <Route path="/" element={<PasswordChecker />} />
        <Route path="/change-password" element={
          <>
            <PasswordGeneratorContextProvider>
              <GeneratedPassword />
            </PasswordGeneratorContextProvider>

            <PasswordCriteriaContextProvider>
              <PasswordCriteria />
            </PasswordCriteriaContextProvider>
          </>
        }
        />
      </Routes>
    </div>
  )
}

export default App
