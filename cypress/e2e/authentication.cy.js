describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("http://104.236.4.147:3001/auth/login");
  });
  it("should log in successfully", () => {
    cy.intercept("POST", "/auth/login").as("loginRequest");

    cy.visit("http://104.236.4.147:3001/login");
    cy.get('[placeholder="Email/Username"]').type("john.doe@example.com");
    cy.get('[placeholder="Password"]').type("password123");
    cy.contains("button", "Login").click();
    cy.wait("@loginRequest").then((interception) => {
      if (interception.response.statusCode === 200) {
        cy.url().should("eq", "http://104.236.4.147:3001/dashboard");
      } else {
        cy.contains("Signup here").click();
        cy.url().should("eq", "http://104.236.4.147:3001/signup"); 

        // User doesn't exist, navigate to the signup page
        cy.get('[placeholder="First Name"]').type("John");
        cy.get('[placeholder="Last Name"]').type("Doe");
        cy.get('[placeholder="Email"]').type("john.doe@example.com");
        cy.get('[placeholder="Password"]').type("password123");
        cy.get('[placeholder="Confirm Password"]').type("password123");
        cy.contains("button", "Signup").click();
        cy.url().should("eq", "http://104.236.4.147:3001/login");
        // Perform login with the newly created user
        cy.get('[placeholder="Email/Username"]').type("john.doe@example.com");
        cy.get('[placeholder="Password"]').type("password123");
        cy.contains("button", "Login").click();
        cy.url().should("eq", "http://104.236.4.147:3001/dashboard");
      }
    });
  });
});
