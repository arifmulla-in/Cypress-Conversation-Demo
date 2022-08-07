class CreateNewPage {
  getConversationTitleTextField() {
    return cy.get(".inline-block > .ng-pristine");
  }

  getAddMessageButton() {
    return cy.get("button[class='md-raised md-primary md-button']");
  }

  getAddMessageTextField() {
    return cy.get(".autocompleter-wrapper > .full-width");
  }

  getDropdownIcon() {
    return cy.get("i[title='Additional actions']");
  }

  getDropdownOptions() {
    return cy.get(".context-menu .md-button");
  }

  getDropdownSelectedOption() {
    return cy.get("span[role='button']");
  }


  getStatusLabel() {
    return cy.get("md-chip[role='listitem']");
  }
}

export default CreateNewPage;
