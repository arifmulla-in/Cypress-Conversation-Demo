/// <reference types="Cypress" />
import NavigationItems from "../../support/pageObjects/NavigationItemsPage";
import CreateNewPage from "../../support/pageObjects/CreateNewPage";
import ConversationOverviewPage from "../../support/pageObjects/ConversationOverviewPage";

describe("Spectrm Conversation Suite", function () {
  before(function () {
    // runs once before all tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Verify Newly Created Conversation", function () {
    const navigationItems = new NavigationItems();
    const createNewPage = new CreateNewPage();

    cy.visit(Cypress.env("url"));
    cy.login(Cypress.env("username"), Cypress.env("password"));

    navigationItems.getCollapseLink().click();
    createNewPage.getConversationTitleTextField().clear().type(this.data.title);
    createNewPage.getAddMessageTextField().type(this.data.message);
    createNewPage.getAddMessageButton().click();

    createNewPage.getDropdownSelectedOption().then(function (element) {
      const selectedOption = element.text();
      if (selectedOption === "Save") {
        cy.wrap(element).click();
      }
    });

    createNewPage.getDropdownIcon().click();
    createNewPage.getDropdownOptions().should("have.length", 2);
    createNewPage.getDropdownOptions().each(($e1, index, $list) => {
      const selectedOption = $e1.text();
      if (selectedOption.includes("Activate")) {
        cy.wrap($e1).click();
      }
    });
    cy.contains("Activate").click({ force: true });
    cy.contains("Activate").click({ force: true });
    // There is an issue here, after closing the Popup dialog for activation, popup dialog window appears
    // again during automation execution.

    createNewPage.getStatusLabel().should("have.text", this.data.status);
    navigationItems.getLogoutLink().click();
  });

  it("Verify Activated Conversation in Active List", function () {
    const navigationItems = new NavigationItems();
    const createNewPage = new CreateNewPage();
    const conversationOverviewPage = new ConversationOverviewPage();

    cy.visit(Cypress.env("url"));
    cy.login(Cypress.env("username"), Cypress.env("password"));

    navigationItems.getCollapseLink().click();

    // Verify Activated Conversation in the Active Tab List
    navigationItems.getStructureLink().click();
    navigationItems.getStructureConversationLink().click({ force: true });
    conversationOverviewPage.getActiveTab().click();

    conversationOverviewPage.getTableTitleColumn().each(($el, index, $list) => {
      const activeItem = $el.text().trim();
      cy.log(activeItem);
      if (activeItem === "Test2") {
        conversationOverviewPage.getTableTitleColumn().eq(index).prev().click();
        expect(activeItem).to.equal("Test2");
      }
    });

    navigationItems.getLogoutLink().click();
  });
});
