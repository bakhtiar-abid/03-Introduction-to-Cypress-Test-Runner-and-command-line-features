// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress"  /> 
/// <reference types="cypress-xpath" />

//custome command
Cypress.Commands.add('getIframe', (iframe)=>{
    return cy
       .get(iframe)
       .its("0.contentDocument.body")
       .should("be.visible")
       .then(cy.wrap);
})


//custom command for clicking on link using label
Cypress.Commands.add('clickLink', (label)=>{
    cy.get('a').contains(label).click();
})



//Over Write contains()
// Cypress.Commands.overwrite(
//    "contains",
//    (originalFn, subject, filter, text, options = {})=>{
//     //determine if a filter argument was passed
//     if(typeof text === 'object'){
//         options = text
//         text = filter
//         filter = undefined
//     }

//     options.matchCase = false

//     return originalFn(subject, filter, text, options)

//    })


  //Custom Command For login

  Cypress.Commands.add("loginApp", (email, password)=>{
    cy.get("#Email").type(email);
    cy.get("#Password").type(password);
    cy.get("form > .buttons > .button-1").click()
  })


  Cypress.Commands.add("register", (firstName, lastName, email, companyName, password)=>{
     cy.get("#gender-male").click();

     cy.get("#FirstName").type(firstName);
     cy.get("#LastName").type(lastName);
     cy.get("select[name='DateOfBirthDay']")
        .select("10")
        .should("have.value", "10");

     cy.get("select[name='DateOfBirthMonth']")
        .select("April")
        .should("have.value", "4");

     cy.get("select[name='DateOfBirthYear']")
        .select("1998")
        .should("have.value", "1998");

     cy.get("#Email").type(email);

     cy.get("#Company").type(companyName);

     //password

     cy.get("#Password").type(password);
     cy.get("#ConfirmPassword").type(password);

     cy.get("#register-button").click();
  })


