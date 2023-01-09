describe('handle dropdowns', () => { 

    it.skip('dropdown with select', () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        //select value from a dropdown list
        cy.get("#zcf_address_country")
           .select("Algeria")
           .should("have.value", "Algeria");
    });


    it.skip('dropdown without select', () => {
        cy.visit(
           "https://www.dummyticket.com/dummy-ticket-for-visa-application/"
        );

        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Italy").type('{enter}')
        cy.get("#select2-billing_country-container").should("have.text", "Italy");
    });

    // auto sugesting dropdown from wikipedia webpage

    it.skip('Auto suggest dropdown', () => {
        cy.visit("https://www.wikipedia.org/")

        cy.get("#searchInput").type("Delhi")

        cy.get(".suggestion-title").contains("Delhi University").click()
    });

    //automate dynamic dropdown
    it('automatic dynamic dropdown', () => {
        cy.visit("https://www.google.com/");

        cy.get("input[name='q']").type("cypress automation")

        cy.wait(4000)

        cy.get("div.wM6W7d>span").should('have.length', 11);
        // another doing of selection the dynamic dropdown option
        cy.get("div.wM6W7d>span").each(($el, index, $list)=>{
            if($el.text() == "cypress automation tutorial"){
                cy.wrap($el).click()
            }
        })

        //validation using assertions
        cy.get("input[name='q']").should(
           "have.value",
           "cypress automation tutorial"
        );
    });
 })