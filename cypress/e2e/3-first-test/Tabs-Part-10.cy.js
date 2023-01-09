describe('Handle tab-approach-1', () => { 

    it.skip('Approach1', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")

        cy.get(".example>a").invoke('removeAttr', 'target').click()

        cy.url().should(
           "include",
           "https://the-internet.herokuapp.com/windows/new"
        );

            cy.wait(5000)

        //operations
        cy.go('back'); //back to parent tab
    });

    it('Approach2', () => {
       cy.visit("https://the-internet.herokuapp.com/windows"); // parent tab

       //limitation sub-domain should be matched to use approach as well as the paarent weblink
       
       cy.get(".example>a").then((e) => {
          let url = e.prop("href");

          cy.visit(url);
       });

       // validating the page after visiting
       cy.url().should(
          "include",
          "https://the-internet.herokuapp.com/windows/new"
       );

       cy.wait(5000);

       //operations
       cy.go("back"); //back to parent tab
    });
 })