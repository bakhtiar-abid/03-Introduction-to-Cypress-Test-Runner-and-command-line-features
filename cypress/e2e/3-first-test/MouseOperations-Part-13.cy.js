import "cypress-iframe";
require ('@4tw/cypress-drag-drop');

describe("Mouse Operations", () => {

    it("MouseHover", () => {
        cy.visit("https://demo.opencart.com/");

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)").should("not.be.visible");

        //mouseover trigger
        cy.get(".nav > :nth-child(1) > .dropdown-toggle")
            .trigger("mouseover")
            .click();
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)").should("be.visible");
    });

    it("Right Click", () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        //perform the right click action
        //Approach-1
        // cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu")

        // cy.get(".context-menu-icon-copy").should('be.visible');

        //Approach-2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get(".context-menu-icon-copy").should("be.visible");
    });

    it("Double click", () => {
        cy.visit("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick");

        //getting the entire iframe by using custom command can use it in multiple scripts
        cy.frameLoaded("#iframeResult"); //Load the frame

        //Approach-1, trigger
        //   cy.iframe("#iframeResult")
        //      .find("p[ondblclick='myFunction()']")
        //      .trigger("dblclick");

        //      cy.iframe("#iframeResult")
        //         .find("#demo")
        //         .should("have.value", "Hello World");

        //Approach-2, trigger
        cy.iframe("#iframeResult")
            .find("p[ondblclick='myFunction()']")
            .dblclick();

        //  cy.iframe("#iframeResult")
        //     .find("#demo")
        //     .should("have.text","Hello World");

        // we should use (should.value) when we have see input value

    });

    it("Drag and drop using plugin", () => {
        cy.visit(
           "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
        );
        cy.get("#box6").should("be.visible");
        cy.get("#box106").should("be.visible");

        cy.wait(3000);
        cy.get("#box6").drag("#box106");
    });

    it.only("Scrolling Page", () => {
        cy.visit(
           "https://www.countries-ofthe-world.com/flags-of-the-world.html"
        );

        //USA Flag
        cy.get(":nth-child(2) > tbody > :nth-child(96) > :nth-child(1) > img").scrollIntoView({duration: 3000})
        cy.get(":nth-child(2) > tbody > :nth-child(96) > :nth-child(1) > img").should("be.visible");

       cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration:3000})

      cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').should("be.visible")
      
       cy.get("div#footer").scrollIntoView({ duration: 3000 });
    });

   
});
