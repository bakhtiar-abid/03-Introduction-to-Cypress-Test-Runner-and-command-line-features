describe('login', () => { 
Cypress.on("uncaught:exception", (err, runnable) => {
   return false;
});
    it('loginTest Case', () => {
        cy.visit("https://zoey-admin.netlify.app/login");

        cy.get("[name='email']").type("new@kobutor.com");

        cy.get("[name='password']").type("123456");

        cy.get(".text-white").click();
    });
 })