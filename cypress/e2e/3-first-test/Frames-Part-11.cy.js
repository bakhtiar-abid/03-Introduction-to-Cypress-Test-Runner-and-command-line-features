import "cypress-iframe";

describe("Handling frames", () => {
   it("approach-1", () => {
      cy.visit("https://the-internet.herokuapp.com/iframe");

      //getting the entire iframe in the variable
      const iframe = cy
         .get("#mce_0_ifr")
         .its("0.contentDocument.body")
         .should("be.visible")
         .then(cy.wrap);

      cy.wait(3000);
      //clear default message and type welcome
      iframe.clear().type("Welcome {ctrl+a}");
      cy.get("[aria-label='Bold']").click();
   });

   it("approach-2 by using custom command", () => {
      cy.visit("https://the-internet.herokuapp.com/iframe");

      //getting the entire iframe by using custom command can use it in multiple scripts
      cy.getIframe("#mce_0_ifr").clear().type("Welcome {ctrl+a}");
      //bold the text then click
      cy.get("[aria-label='Bold']").click();
   });

   it("approach-3 by using cypress-iframe plugin", () => {
      cy.visit("https://the-internet.herokuapp.com/iframe");

      cy.frameLoaded("#mce_0_ifr"); // Load the frame

      cy.iframe("#mce_0_ifr").clear().type("Welcome {ctrl+a}");
        cy.get("[aria-label='Bold']").click();
   });
});
