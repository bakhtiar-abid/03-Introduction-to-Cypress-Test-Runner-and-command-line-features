describe("Alerts", () => {
   //1) Javascript Alert: It will have some text and an "OK" button

   it.skip("JS Alert", () => {
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

      cy.get("button[onclick='jsAlert()']").click();

      //cypress events ==> altert window
      cy.on("window:alert", (t) => {
         expect(t).to.contains("I am a JS Alert");
      });

      //alert window automatically closed by cypress

      //after closing
      cy.get("#result").should(
         "have.text",
         "You successfully clicked an alert"
      );
   });

   //2) Javascript Confirm Alert: It will have some text with "OK" and 'Cancel'  buttons

   it("JS Confirm Alert - Okay button", () => {
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

      cy.get("button[onclick='jsConfirm()']").click();

      //cypress events ==> confirm window alert
      //cypress will automatically close window of the alert box
      //cypress automatically closed alert window by using ok button-default
      cy.on("window:confirm", (t) => {
         expect(t).to.contains("I am a JS Confirm");
      });

      //after clicking the confirm window validating the message

      cy.get("#result").should("have.text", "You clicked: Ok");
   });

   it("JS Confirm Alert- Cancel", () => {
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

      cy.get("button[onclick='jsConfirm()']").click();

      //cypress events ==> confirm window alert
      //cypress will automatically close window of the alert box
      //cypress automatically closed alert window by using ok button-default
      cy.on("window:confirm", (t) => {
         expect(t).to.contains("I am a JS Confirm");
      });

      //after clicking the confirm window validating the message

      cy.on("window:confirm", () => false); // cypress closes alter window using cancel window

      cy.get("#result").should("have.text", "You clicked: Cancel");
   });

   //3) Javascript Prompt Alerts: It will have some text with a text for user input along with 'OK

   it("JS Prompt Alert - Okay Button", () => {
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

      // opening prompt window by using events and passing the text in the input box
      cy.window().then((win) => {
         cy.stub(win, "prompt").returns("welcome");
      });

      cy.get("button[onclick='jsPrompt()']").click();

      //cypress will automatically close prompted alter - it will use ok button - by          defalut

      cy.get("#result").should("have.text", "You entered: welcome");
   });

   //using cancel button
   it("JS Prompt Alert - Cancel Button", () => {
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

      // opening prompt window by using events and passing the text in the input box
      cy.window().then((win) => {
         cy.stub(win, "prompt").returns("welcome");
      });

      cy.get("button[onclick='jsPrompt()']").click();

      //cypress will automatically close prompted alter - it will use ok button - by          defalut

      cy.on("window:prompt", () => false);

      cy.get("#result").should("have.text", "You entered: welcome");
   });

   //4) Authenticated Alert
   it.only("Authenticated alert", () => {
      //approach-1
      // cy.visit("https://the-internet.herokuapp.com/basic_auth",
      // {auth:

      // {username: "admin", password: "admin"}

      // });

      // cy.get("div[class='example'] p").should(
      //    "have.contain",
      //    "Congratulations"
      // );

      //approach-2
      //https://admin:admin@the-internet.herokuapp.com/basic_auth

      cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");

      cy.get("div[class='example'] p").should(
         "have.contain",
         "Congratulations"
      );
   });
});
