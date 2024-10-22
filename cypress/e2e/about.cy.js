describe("About Page", () => {
  beforeEach(() => {
    // Visit the About page
    cy.visit("/about");
  });

  it("should display the About page heading and description", () => {
    // Check if the heading is visible
    cy.get("h1#about-heading")
      .should("be.visible")
      .and("contain", "About This Website");

    // Check if the description is visible
    cy.contains(
      "This website demonstrates the importance of accessibility in web development"
    ).should("be.visible");
  });

  it("should display helpful resources", () => {
    // Check if the resources list is displayed
    cy.get("#resource-list").within(() => {
      // Check each resource link
      cy.contains("Check color contrast compliance (WCAG AA).").should(
        "have.attr",
        "href",
        "https://webaim.org/resources/contrastchecker/"
      );
      cy.contains("Hex color picker tool.").should(
        "have.attr",
        "href",
        "https://htmlcolorcodes.com/"
      );
      cy.contains("Chrome extension for landmark navigation.").should(
        "have.attr",
        "href",
        "https://chromewebstore.google.com/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp"
      );
    });
  });

  it("should open the alert modal when button is clicked", () => {
    // Click the button to open the alert modal
    cy.get("button.custom-button").click();

    // Check if the alert modal is visible
    cy.get(".modal-overlay").should("be.visible");
    cy.contains("Received!").should("be.visible"); // Assuming the modal contains this title
    cy.contains("Thanks! Your feedback is important to us.").should(
      "be.visible"
    );

    // Close the alert modal
    cy.get(".modal-overlay button").click(); // Adjust the selector based on your modal's close button
    cy.get(".modal-overlay").should("not.exist"); // Ensure the modal is closed
  });
});
