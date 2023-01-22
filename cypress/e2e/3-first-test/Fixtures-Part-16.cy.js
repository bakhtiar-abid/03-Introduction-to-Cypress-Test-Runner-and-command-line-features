describe("MyTestSuite", () => {
   //direct access by Hard Coded
/*    it.only("FixtureDemoTest", () => {
      cy.visit(
         "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );

      //data from the fixture file
      cy.fixture("orangehrm").then((data) => {
         cy.log(data);
         cy.get("input[placeholder='Username']").type(data.username);
         cy.get("input[placeholder='Password']").type(data.password);
         cy.get("button[type='submit']").click();
         cy.get(":nth-child(2) > .oxd-main-menu-item").click();
         cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
            "have.text",
            data.expected
         );
      });
   }); */

   //Access through Hook - for multiple it blocks
   //access data from Fixture
   let userData;
   before(() => {
      cy.fixture("orangehrm").then((data) => {
         userData = data;
      });
   });

   it("FixturesDemoTest", () => {
      cy.visit(
         "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );

      //data from the fixture file
      cy.get("input[placeholder='Username']").type(userData.username);
      cy.get("input[placeholder='Password']").type(userData.password);
      cy.get("button[type='submit']").click();
      cy.get(":nth-child(2) > .oxd-main-menu-item").click();
      cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
         "have.text",
         userData.expected
      );
   });
});