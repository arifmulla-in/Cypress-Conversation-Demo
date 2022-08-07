class SignInSpectrmPage {
  getUserNameEditbox() {
    return cy.get("#username");
  }

  getContinueButton() {
    return cy.get("button[value='default']");
  }
}

export default SignInSpectrmPage;
