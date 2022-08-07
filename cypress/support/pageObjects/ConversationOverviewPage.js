class ConversationOverviewPage {
  getActiveTab() {
    return cy.get(
      "button[aria-label='Active'] span[class='_md-nav-button-text']"
    );
  }

  getDraftLink() {
    return cy.get(
      "button[aria-label='Draft'] span[class='_md-nav-button-text']"
    );
  }

  getInactiveLink() {
    return cy.get(
      "button[aria-label='Inactive'] span[class='_md-nav-button-text']"
    );
  }

  getTableTitleColumn() {
    return cy.get(".s-list-row div[col-ident='title']");
  }
}

export default ConversationOverviewPage;
