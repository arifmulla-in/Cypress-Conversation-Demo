class EnterYourPasswordPage {
  getPasswordEditbox() {
    return cy.get("#password");
  }

  getContinueButton() {
    return cy.get("button[type='submit']");
  }
}

export default EnterYourPasswordPage;
