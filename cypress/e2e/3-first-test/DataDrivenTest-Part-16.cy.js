describe('MyTestSuite', () => { 

    it('DataDrivenTest', () => {
        cy.fixture("orangehrm2").then((data)=>{
            cy.visit(
               "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
            );
            data.forEach(userData => {
                   cy.get("input[placeholder='Username']").type(
                      userData.username
                   );
                   cy.get("input[placeholder='Password']").type(
                      userData.password
                   );
                  cy.get("button[type='submit']").click();
                 

                    if (userData.username == "Admin" && userData.password == "admin123"){
                      cy.get(":nth-child(2) > .oxd-main-menu-item").click();
                     cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
                        "have.text",
                        userData.expected
                     ); //  PIM validation

                     cy.get(".oxd-userdropdown-tab > .oxd-icon").click(); //logout
                     cy.get(":nth-child(4) > .oxd-userdropdown-link").click(); //logout

                     cy.wait(3000);
                    }else{
                     cy.wait(2000);
                     cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text", userData.expected)
                    }
            });
        })
    });
 })