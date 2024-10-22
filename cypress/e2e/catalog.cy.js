describe("Catalog Page Tests", () => {
  // Visit the Home page where Catalog is rendered
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the catalog heading", () => {
    cy.get("#catalog-heading").should("contain.text", "Dog Catalog");
  });

  it("should display the correct number of dog cards", () => {
    cy.get(".dog-cards-container").find(".dog-card").should("have.length", 7); // Expecting 7 dog cards based on the dogs array
  });

  it("should display each dog card with correct details", () => {
    const dogs = [
      { name: "Buddy", age: 3, picture: "https://http.dog/200.jpg" },
      { name: "Bella", age: 2, picture: "https://http.dog/204.jpg" },
      { name: "Charlie", age: 4, picture: "https://http.dog/203.jpg" },
      { name: "Daisy", age: 1, picture: "https://http.dog/599.jpg" },
      { name: "Max", age: 5, picture: "https://http.dog/530.jpg" },
      { name: "Luna", age: 3, picture: "https://http.dog/496.jpg" },
      { name: "Rocky", age: 6, picture: "https://http.dog/561.jpg" },
    ];

    dogs.forEach((dog, index) => {
      cy.get(".dog-cards-container")
        .find(".dog-card")
        .eq(index) // Get the specific dog card based on index
        .within(() => {
          // Check dog name in h2
          cy.get("h2").should("contain.text", dog.name);

          // Check age: format in component is `${age} years`
          cy.get(".category")
            .contains("Age:")
            .siblings(".category-value")
            .should("contain.text", `${dog.age} years`);

          // Check the image source
          cy.get("img").should("have.attr", "src", dog.picture);
        });
    });
  });
});
