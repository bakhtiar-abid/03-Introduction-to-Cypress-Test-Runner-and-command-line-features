
// Four types of hooks are provided by cypress

/* It will operate only once */
//before
//after


/* It will operate multiple times */
//beforeEach
//afterEach




describe('MyTestSuite', () => { 

    before(()=>{
        cy.log("**** Launch App ***** ")
    })

    beforeEach(()=>{
        cy.log("***** Login ******")
    })

    afterEach(()=>{
        cy.log("**** Logout *****")
    })
   

   it('search', () => {
    cy.log("*** searching ***")
   }); 


   it.skip('advanced search', () => {
      cy.log("*** Advance searching ***");
   }); 

   it.only('listing Products', () => {
      cy.log("*** Listing Products ***");
   }); 


    after(() => {
       cy.log("**** Close App ****");
    });


 })