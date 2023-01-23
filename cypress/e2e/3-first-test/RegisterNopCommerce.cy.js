describe("Creating an account", () => {
   it("register", () => {
      cy.visit("https://demo.nopcommerce.com/");

      cy.get(".ico-register").click();
      cy.get("#gender-male").click();

      cy.get("#FirstName").type("Account");
      cy.get("#LastName").type("One");
      cy.get("select[name='DateOfBirthDay']")
         .select("10")
         .should("have.value", "10");

      cy.get("select[name='DateOfBirthMonth']")
         .select("April")
         .should("have.value", "4");

      cy.get("select[name='DateOfBirthYear']")
         .select("1998")
         .should("have.value", "1998");

         cy.get("#Email").type("account@gmail.com");

         cy.get("#Company").type("company@gmail.com");

         //password

         cy.get("#Password").type("123456");
         cy.get("#ConfirmPassword").type("123456");


         cy.get("#register-button").click();
        //  cy.get(".result").should("have.text", "")
   });
});
