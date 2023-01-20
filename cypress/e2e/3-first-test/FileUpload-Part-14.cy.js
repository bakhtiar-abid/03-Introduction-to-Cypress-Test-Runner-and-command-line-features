import "cypress-file-upload";

describe('File Upload', () => {

    it('Single File Upload', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");

        cy.get("#file-upload").attachFile("Test-1.pdf");
        cy.get("#file-submit").click();
        cy.wait(5000);

        //assertion for validation
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    });


    it.only('File Upload - Rename', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");

        cy.get("#file-upload").attachFile({filePath:"Test-1.pdf", fileName: 'myfile.pdf' });
        cy.get("#file-submit").click();
        cy.wait(5000);

        //assertion for validation
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    });

    
    it('File Upload - Drag and drop', () => {
        
    });
    it('Multiple files Upload', () => {
        
    });

    it('File upload - Shadow Dom', () => {
        
    });
 })