// const { describe } = require("mocha");



describe("Assertions Demo", ()=>{
    it('Implicit assertions', () => {
        
        cy.visit(
           "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        );


        //should and ==> assertions

        // cy.url().should("include", "orangehrmlive.com");
        // cy.url().should(
        //    "eq",
        //    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        // );

        // cy.url().should('contain', 'orangehrm')


        // cy.url().should("include", "orangehrmlive.com")
        // .should(
        //    "eq",
        //    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        // )
        // .should('contain', 'orangehrm')



        cy.url()
           .should("include", "orangehrmlive.com")
           .and(
              "eq",
              "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
           )
           .and("contain", "orangehrm");



    });
})