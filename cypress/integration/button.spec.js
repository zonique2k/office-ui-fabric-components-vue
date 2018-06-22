/// <reference types="Cypress" />
import { button } from "../../dist/bundle.esm";

context("Button", () =>{
    it('do magic stuff', () => {
        var frame = window.parent.document.querySelector(".aut-iframe");
        frame.contentDocument.write("<h1>TESTING</h1><script>console.log('works', window.top.Cypress);</script>");
    });
});