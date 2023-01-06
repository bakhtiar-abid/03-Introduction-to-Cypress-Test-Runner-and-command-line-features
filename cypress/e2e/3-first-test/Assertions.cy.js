// const { describe } = require("mocha");




describe("Assertions Demo", ()=>{
    it('Implicit assertions', () => {
        
        cy.visit(
           "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        );


        //should and ==> implicit assertions, cypress built assertions

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


         //checking the url link using assertions
        cy.url()
           .should("include", "orangehrmlive.com")
           .and(
              "eq",
              "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
           )
           .and("contain", "orangehrm")
           .and("not.contain", "greenhrm")

           cy.title().should('include', 'Orange')
           .and('eq', 'OrangeHRM')
           .and('contain', "HRM")

           cy.get(".orangehrm-login-branding > img").should("be.visible")
           .and("exist") // validating wether the company logo is visible or not


           cy.xpath("//a").should('have.length', '5') 
           // validating no of links are present in the webpage

           cy.get("input[placeholder='Username']").type("Admin") 
           // provide a value into inputbox

           cy.get("input[placeholder='Username']").should('have.value', "Admin")
            // input value checking

           

    });


    it('Explicit assertions', () => {
        
        cy.visit(
           "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        );
      cy.get("input[placeholder='Username']").type("Admin");
      cy.get("input[placeholder='Password']").type("admin123");
      cy.get("button[type='submit']").click()


      let expName = "Garnett Douglas";

      cy.get(".oxd-userdropdown-name").then( (x)=>{
         let actName = x.text();

         // Explicit Assertion in BDD Approach
         expect(actName).to.equal(expName);
         expect(actName).to.not.equal(expName);

         //TDD Style
         assert.equal(actName, expName)
         assert.notEqual(actName, expName)

      })

    });
})