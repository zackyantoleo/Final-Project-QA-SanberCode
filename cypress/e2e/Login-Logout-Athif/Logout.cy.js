/// <reference types="cypress" />

describe("Positive Logout Test", () => {
  it("Success Logout", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    cy.get(".oxd-userdropdown-tab > .oxd-icon").click();
    cy.wait(2000);

    cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
    cy.wait(2000);

    cy.url().should("contain", "/login");
    cy.get(".oxd-button").should("be.visible");
  });
});
describe("Negative Logout Test", () => {
  it("Failed Logout by Directly Navigate Login URL", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    cy.visit("https://opensource-demo.orangehrmlive.com");

    cy.url().should("contain", "/dashboard");
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should("be.visible");
  });
});
