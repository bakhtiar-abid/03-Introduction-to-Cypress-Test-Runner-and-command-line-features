
describe("XPathLocators", () => {
   it("find no of products", () => {
      cy.visit("https://automationexercise.com/products");
      cy.xpath("//div[@class='features_items']/div").should("have.length", 35);
      //should is an assertion, validating whether have exact same product length or not
   });

   it("chained xpath", () => {
      cy.visit("https://automationexercise.com/products");
      cy.xpath("//div[@class='features_items']").xpath("./div").should("have.length", 35);
      //should is an assertion, validating whether have exact same product length or not
   });
});
