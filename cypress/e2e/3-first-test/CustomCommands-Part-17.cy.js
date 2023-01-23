//click on link using label
// over writing existing contains() command
// re-usable custom command



describe('first', () => { 
    it.skip('"handling links', () => {
        cy.visit("https://demo.nopcommerce.com/");

        //direct - without using custom command

        // cy.get(
        //    "div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)"
        // ).click()

        //using custom command

        cy.clickLink("Apple MacBook Pro 13-inch");

        cy.get("div[class='product-name'] h1").should(
           "have.text",
           "Apple MacBook Pro 13-inch"
        );
    });

    it('overwriting existing command', () => {
         cy.visit("https://demo.nopcommerce.com/");

      

       //using overwrite custom command
       cy.clickLink("Apple MacBook Pro 13-inch");

       cy.get("div[class='product-name'] h1")
          .should("have.text", "Apple MacBook Pro 13-inch")
    });

    it('Login Command', () => {
        cy.visit("https://demo.nopcommerce.com/");
        //Login
        cy.clickLink("Log in")
        cy.wait(3000);
        //custom command to login 
        cy.loginApp("account@gmail.com","123456") // custom command
        cy.get(".ico-account").should("have.text", "My account");
        
    });

    it.only('Register Command', () => {
        cy.visit("https://demo.nopcommerce.com/");
              cy.get(".ico-register").click();

        cy.register("Abid", "John", "john@gmail.com", "mnmn@gmail.com", "123456");
    });
 })