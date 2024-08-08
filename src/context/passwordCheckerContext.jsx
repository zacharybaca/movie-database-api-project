/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { passwordScorer } from "password-scorer";


const PasswordCheckerContext = React.createContext();

function PasswordCheckerContextProvider(props) {

    const [result, setResult] = React.useState({
      score: "",
      feedback: [],
      description: "",
    });

    const [password, setPassword] = React.useState("");

    function checkAnotherPassword() {
        setResult("");
    }

    function handleChange(e) {
      const { value } = e.target;
      setPassword(value);
    }

    const checkIfExposed = async () => {
      const result = await passwordScorer(password, "en");
      setResult({
        score: result.score,
        feedback: result.feedback,
        description: result.description,
      });

      setPassword("");
    };
    return (
        <PasswordCheckerContext.Provider value={{
            handleChange: handleChange,
            password: password,
            result: result,
            checkIfExposed: checkIfExposed,
            checkAnotherPassword: checkAnotherPassword
        }}>
            {props.children}
        </PasswordCheckerContext.Provider>
    )
}

export {PasswordCheckerContext, PasswordCheckerContextProvider}
