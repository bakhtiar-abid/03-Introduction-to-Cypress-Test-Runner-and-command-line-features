describe("My First Test Suite", () => {
   it("verify title-positive", () => {
      //test step
      cy.visit("https://opensource-demo.orangehrmlive.com/");
      cy.title().should('eq', "OrangeHRM");
   });

   it("verify title-negetive test", () => {
      //test step
      cy.visit("https://opensource-demo.orangehrmlive.com/");
      cy.title().should('eq', "OrangeHRM12344");
   });
   // every test block is representing the test case
});
