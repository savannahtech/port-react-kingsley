describe("Navigation Tests", () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit("/");
  });

  it("should navigate to the Catalog page", () => {
    cy.get('a[aria-label="Go to Catalog"]').click();
    cy.url().should("include", "/"); // Verify URL includes /
    cy.get("h1#catalog-heading").should("exist").and("contain", "Dog Catalog"); // Check if Catalog page is rendered
  });

  it("should navigate to the Manage page", () => {
    cy.get('a[aria-label="Go to Manage Dogs"]').click();
    cy.url().should("include", "/manage"); // Verify URL includes /manage
    cy.get("h2#manage-heading").should("exist").and("contain", "Add a New Dog"); // Check if Manage page is rendered
  });

  it("should navigate to the About Us page", () => {
    cy.get('a[aria-label="Go to About Us"]').click();
    cy.url().should("include", "/about"); // Verify URL includes /about
    cy.get("h1").should("exist").and("contain", "About This Website"); // Adjust this selector based on your About Us page heading
  });
});
