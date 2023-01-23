describe('Handle Table', () => { 

    //in cypress it is a hook
    beforeEach("Login", ()=>{

        //visit to the website
        cy.visit("https://demo.opencart.com/admin/index.php")
        //input username
        cy.get("#input-username").type("demo")
        //input password
        cy.get(("#input-password")).type("demo");
        //click submit button
        cy.get("button[type='submit']").click();
        //close the pop up modal
        cy.get("button.btn-close").click();


        //Customers ==> Customers
        cy.get("#menu-customer > a").click() //customers main menu
        cy.get("#menu-customer>ul>li:first-child").click() // customer sub/child item
    })

    it.skip('Check Number Rows & Columns', () => {
        //check rows ==> 10 rows 
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10);
        //check columns ==> 7 columns
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 7);
    });

    it.skip('Check cell data from specific row & Columns', () => {
        cy.get(
           'table[class="table table-bordered table-hover"] > tbody > tr:nth-child(8)>td:nth-child(3)'
        ).contains("rs@yopmail.com");
    });

    it.skip('Read all the rows and Columns data in the first page', () => {
        //getting all the rows
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })
           
        })
    });

    it.only('Pagination', () => {
        // let totalPages;
        // //find total number of pages
        // cy.get(".col-sm-6.text-end").then((e)=>{
        //    let mytext = e.text(); //Showing 1 to 10 of 8942 (895 Pages)
        //     totalPages = mytext.substring( mytext.indexOf("(") + 1, mytext.indexOf("Pages") - 1 );
        //     cy.log("Total number of pages in a table ===> " + totalPages);
        // })


        let totalPages = 5;
        for (let p = 1; p <= totalPages; p++) {
           if (totalPages > 1) {
              cy.log("Active page is ===> " + p);
              cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click();
              cy.wait(3000);
           ]]
              cy.get(
                 "table[class='table table-bordered table-hover']>tbody>tr"
              ).each(($row, index, $rows) => {
                 cy.wrap($row).within(() => {
                    cy.get("td:nth-child(3)").then((e) => {
                       cy.log(e.text()); // Email particular data from column
                    });
                 });
              });
           }
        }
    });
 })