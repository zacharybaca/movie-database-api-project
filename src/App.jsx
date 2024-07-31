import GeneratedPassword from "./components/GeneratedPassword/GeneratedPassword";
import PasswordCriteria from "./components/PasswordCriteria/PasswordCriteria";
import { PasswordGeneratorContextProvider } from './context/passwordGeneratorContext';
import { PasswordCriteriaContextProvider } from './context/passwordCriteriaContext';
import './App.css'

function App() {
  

  return (
    <div id="app-container">
      <PasswordGeneratorContextProvider>
        <GeneratedPassword />
      </PasswordGeneratorContextProvider>
      
      <PasswordCriteriaContextProvider>
        <PasswordCriteria />
      </PasswordCriteriaContextProvider>
    </div>
  )
}

export default App
