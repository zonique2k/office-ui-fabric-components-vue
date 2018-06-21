/// <reference types="Cypress" />

const mountVue = require('cypress-vue-unit-test');
import { button } from "../../dist/bundle.es";
import Vue from 'vue';

context("button", () =>{
    var component = {
        template : "<uiButton :type='btnType'>{{btnText}}</uiButton>",
        data(){
            return {
                btnText : "the text",
                btnType : "primary"
            }
        },
        components : { uiButton : button }
    };
    beforeEach(mountVue(component));

    it('should show a button', () => {
        cy.contains("the text");
        cy.get("button").vrt("show");
    });

    it('is possible to change the inner text', () => {
        cy.then(()=>{
            Cypress.vue.btnText = "updated text";
        });
        cy.contains("updated text");
        cy.get("button").vrt("changed text");
    });

    it('is possible to change type', () => {
        cy.then(()=>{
            Cypress.vue.btnType = "small";
        });
        cy.get(".ms-Button--small").vrt("small button");
    });
});