import GeneratedPassword from "./components/GeneratedPassword/GeneratedPassword";
import PasswordCriteria from "./components/PasswordCriteria/PasswordCriteria";
import PasswordChecker from "./components/PasswordChecker/PasswordChecker";
import { PasswordGeneratorContextProvider } from './context/passwordGeneratorContext';
import { PasswordCriteriaContextProvider } from './context/passwordCriteriaContext';
import './App.css'

function App() {
  

  return (
    <div id="main-container">
      <PasswordChecker />
      {/* <div id="app-container">
        <PasswordGeneratorContextProvider>
          <GeneratedPassword />
        </PasswordGeneratorContextProvider>
        
        <PasswordCriteriaContextProvider>
          <PasswordCriteria />
        </PasswordCriteriaContextProvider>
      </div> */}
    </div>
    
  )
}

export default App
