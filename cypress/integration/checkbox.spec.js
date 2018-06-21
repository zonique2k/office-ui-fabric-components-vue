/// <reference types="Cypress" />

const mountVue = require('cypress-vue-unit-test');
import { checkbox } from "../../dist/bundle.es";
import Vue from 'vue';

context("callout", () =>{
    var component = {
        template : `<uiCheckbox v-model='checkboxChecked'></uiCheckbox>
      `,
        data(){
            return {
                checkboxChecked : true
            }
        },
        components : { uiCheckbox : checkbox }
    };
    beforeEach(mountVue(component));

    it('should show something', () => {
    });

});