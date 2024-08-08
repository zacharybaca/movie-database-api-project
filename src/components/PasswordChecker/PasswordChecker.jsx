import "./password-checker.css";
import { useNavigate } from "react-router-dom";
import { PasswordCheckerContext } from "../../context/passwordCheckerContext";
import React from "react";

export default function PasswordChecker() {
    const navigate = useNavigate();
    const context = React.useContext(PasswordCheckerContext);

    return (
      <div id="password-checker-main">
        <div id="password-checker-container">
          <h1>Is Your Password Secure Enough?</h1>
          <input
            type="password"
            id="check-password"
            name="password"
            onChange={context.handleChange}
            value={context.password}
            hidden={context.result.score}
            placeholder="Enter Password To Check"
            autoFocus
          />
          {context.result && context.result.score !== "" ? "" :  <button type="button" onClick={context.checkIfExposed} disabled={!context.password}>
            Check Password
          </button>}
          {context.result.score && context.result.score < 60 && (
            <button type="button" onClick={() => navigate("/change-password")}>
              Change Password
            </button>
          )}
          {context.result.score && (
            <button type="button" id="check-another-password" onClick={context.checkAnotherPassword}>
              Check Another Password
            </button>
          )}
        </div>
        <div id="result-container">
          {context.result && context.result.score !== "" ? <h1>Results</h1> : ""}
          {context.result.score && (
            <h3>
              <span id="score-span">Score:</span> {context.result.score}
            </h3>
          )}
          {context.result && context.result.feedback.length > 0 && (
            <ul>
              {context.result.feedback.map((statement, index) => (
                <li key={index}>
                  <span id="feedback-span">Suggestion {index + 1}:</span>{" "}
                  {statement}
                </li>
              ))}
            </ul>
          )}
          {context.result.description && (
            <h3>
              <span id="description-span">Description:</span>{" "}
              {context.result.description}
            </h3>
          )}
        </div>
      </div>
    );
}
