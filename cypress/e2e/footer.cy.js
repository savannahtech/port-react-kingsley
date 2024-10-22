describe("Footer Component Tests", () => {
  beforeEach(() => {
    // Visit the home page which is where the footer is located
    cy.visit("/");
  });

  it("should display the correct copyright text with the current year", () => {
    const currentYear = new Date().getFullYear();
    cy.get(".App-footer").within(() => {
      cy.get("#footer-text").should(
        "contain.text",
        `${currentYear} The Dog Catalog. All Rights Reserved.`
      );
    });
  });
});
