class NavigationItemsPage {
  getCreateNewLink() {
    return cy.get("div[aria-label='Create New']");
  }

  getStructureLink() {
    return cy.get("div[aria-label='Structure']");
  }

  getStructureConversationLink() {
    return cy.get(".s-scroll-bar > :nth-child(2) > div");
  }

  getAssetsLink() {
    return cy.get("div[aria-label='Assets']");
  }

  getAutomationLink() {
    return cy.get("div[aria-label='Automation']");
  }

  getAudienceLink() {
    return cy.get("div[aria-label='Audience']");
  }

  getInboxLink() {
    return cy.get("div[aria-label='Inbox']");
  }

  getAnalyticsLink() {
    return cy.get("div[aria-label='Analytics']");
  }

  getSettingsLink() {
    return cy.get("div[aria-label='Settings']");
  }

  getLogoutLink() {
    return cy.get(".logout-btn");
  }

  getExpandLink() {
    return cy.get("a[aria-label='Expand']");
  }

  getCollapseLink() {
    return cy.get("a[aria-label='Collapse']");
  }
}

export default NavigationItemsPage;
