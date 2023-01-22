import "cypress-file-upload";

describe("File Upload", () => {
   it("Single File Upload", () => {
      cy.visit("https://the-internet.herokuapp.com/upload");

      cy.get("#file-upload").attachFile("Test-1.pdf");
      cy.get("#file-submit").click();
      cy.wait(5000);

      //assertion for validation
      cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
   });

   it("File Upload - Rename", () => {
      cy.visit("https://the-internet.herokuapp.com/upload");

      cy.get("#file-upload").attachFile({
         filePath: "Test-1.pdf",
         fileName: "myfile.pdf",
      });
      cy.get("#file-submit").click();
      cy.wait(5000);

      //assertion for validation
      cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
   });

   it("File Upload - Drag and drop", () => {
      cy.visit("https://the-internet.herokuapp.com/upload");

      //attach file using drag and drop option
      cy.get("#drag-drop-upload").attachFile("Test-1.pdf", {
         subjectType: "drag-n-drop",
      });

      cy.wait(3000);
      cy.get(
         "#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span"
      ).contains("Test-1.pdf");
   });

   it("Multiple files Upload", () => {
      cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

      cy.get("#filesToUpload").attachFile(["Test-1.pdf", "Test-2.pdf"]);

      cy.wait(3000);

      cy.get(":nth-child(6) > strong").should(
         "contain.text",
         "Files You Selected:"
      );

      cy.get("div[class='main'] li:nth-child(1)").should(
         "have.text",
         "Test-1.pdf"
      );
      cy.get("div[class='main'] li:nth-child(2)").should(
         "have.text",
         "Test-2.pdf"
      );
   });

   it.only("File upload - Shadow Dom", () => {
      cy.visit(
         "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
      );

      cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile(
         "Test-1.pdf"
      );

      cy.wait(5000);

      cy.get(".smart-item-name", { includeShadowDom: true }).contains(
         "Test-1.pdf"
      );
   });
});
