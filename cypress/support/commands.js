// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
import SignInSpectrmPage from "../support/pageObjects/SignInSpectrmPage";
import EnterYourPasswordPage from "../support/pageObjects/EnterYourPasswordPage";

Cypress.Commands.add("login", (username, password) => {
  const signInSpectrmPage = new SignInSpectrmPage();
  const enterYourPasswordPage = new EnterYourPasswordPage();

  signInSpectrmPage.getUserNameEditbox().type(username);
  signInSpectrmPage.getContinueButton().click();
  enterYourPasswordPage.getPasswordEditbox().type(password);
  enterYourPasswordPage.getContinueButton().click();
});

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
