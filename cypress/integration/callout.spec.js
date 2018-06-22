/// <reference types="Cypress" />

context("Callout", () =>{
    beforeEach(()=>cy.visit("http://localhost:5000/static/callout"));

    it('should be hidden by default', () => {
        cy.get(".ms-Callout").should('not.be.visible');

    });

    it('should be visible when button clicked', () => {
        cy.contains("Open Callout")
            .click()
        cy.get(".ms-Callout").should('be.visible');
    });

    it('should be dismissed, when clicking outside', () => {
        cy.contains("Open Callout").click();
        cy.get("body").click();
        cy.get(".ms-Callout").should('not.be.visible');
    });

    it("should match screenshot", ()=>{
        cy.contains("Open Callout").click()
        cy.get(".ms-Callout").vrt("callout");
    })
});