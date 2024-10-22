describe("Header Component Tests", () => {
  beforeEach(() => {
    // Visit the home page which is where the header is
    cy.visit("/");
  });

  it("should display the logo and navigate to the homepage when clicked", () => {
    cy.get(".logo").find("a").should("have.attr", "href", "/");
    cy.get(".logo").find("a").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("should have navigation links for Catalog, Manage, and About Us", () => {
    cy.get("nav.nav-container").within(() => {
      cy.get("li").should("have.length", 3); // Ensure there are three links

      cy.get("li")
        .eq(0)
        .find("a")
        .should("have.attr", "href", "/")
        .and("contain", "Catalog");
      cy.get("li")
        .eq(1)
        .find("a")
        .should("have.attr", "href", "/manage")
        .and("contain", "Manage");
      cy.get("li")
        .eq(2)
        .find("a")
        .should("have.attr", "href", "/about")
        .and("contain", "About Us");
    });
  });

  it("should navigate to Catalog page when Catalog link is clicked", () => {
    cy.get("nav.nav-container").contains("Catalog").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("should navigate to Manage page when Manage link is clicked", () => {
    cy.get("nav.nav-container").contains("Manage").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/manage");
  });

  it("should navigate to About Us page when About Us link is clicked", () => {
    cy.get("nav.nav-container").contains("About Us").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/about");
  });
});
