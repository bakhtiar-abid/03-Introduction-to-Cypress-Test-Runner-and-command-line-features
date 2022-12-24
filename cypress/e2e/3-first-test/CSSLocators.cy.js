describe('CSSLocators', () => { 

    it('csslocators', () => {
        cy.visit("https://automationexercise.com/products");

        // cy.get("#search_product").type("Men Tshirt"); // id tag is optional

        // cy.get(".form-control").type("Men Tshirt"); // class tag is optional

        // cy.get("[name='search']").type("Men Tshirt"); // attribute 

        cy.get("input.form-control[name='search']").type("Men Tshirt"); //tag class attribute

        cy.get("#submit_search").click(); // do click event

        // cy.get(".lighter").contains("T-Shirts")  //Assertion (Validation) verify or not showing the results that is assertion
    });



 })