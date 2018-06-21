/// <reference types="Cypress" />

const mountVue = require('cypress-vue-unit-test');
import { button, callout } from "../../dist/bundle.es";
import Vue from 'vue';

context("callout", () =>{
    var component = {
        template : `<div>
            <ui-callout
                title='All of your favorite people'
                content='Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.'>
                <ui-button slot='actions'>Learn more</ui-button>
                <ui-button>Open Callout</ui-button>
            </ui-callout>
        </div>
      `,
        data(){
            return {
                btnText : "the text",
                btnType : "primary"
            }
        },
        components : { uiCallout : callout, uiButton : button }
    };
    beforeEach(mountVue(component));

    it('should show something', () => {
        cy.contains("Open Callout")
          .click();
        cy.contains("Open Callout")
    });

});