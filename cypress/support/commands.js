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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Cypress.Commands.add('vrt', { prevSubject: true }, (prevSubject, ssName) => {
//     cy.wrap(prevSubject)
//         .screenshot(ssName)
//         .then(()=>{
//             var ssFile = "./cypress/screenshots/" + ssName + ".png";
//             var baseFile = "./cypress/screenshots_base/" + ssName + ".png";
//             var diffFile = "./cypress/screenshots_diff/" + ssName + ".png";
//             var cmd = "npx blink-diff \"" + baseFile + "\" \"" + ssFile + "\" --verbose --threshold 0.01 threshold-type percent --output \"" + diffFile + "\"";
//             cy.exec(cmd , { failOnNonZeroExit : false}).then((result)=>{
//                 assert.isNotOk(result.code, "Visual comparison failed");
//             });
//         })
// });

Cypress.Commands.add('vrt', { prevSubject: true }, (prevSubject, ssName) => {
    cy.wrap(prevSubject)
        .screenshot(ssName)
        .then((mon)=>{
            var ssFile = "./cypress/screenshots/" + ssName + ".png";
            var baseFile = "./cypress/screenshots_base/" + ssName + ".png";
            var diffFile = "./cypress/screenshots_diff/" + ssName + ".png";
            var cmd = ".\\node_modules\\.bin\\pixelmatch \"" + baseFile + "\" \"" + ssFile + "\" \"" + diffFile + "\" 0.1";
            cy.exec(cmd , { failOnNonZeroExit : false}).then((result)=>{
                var errorPercent = result.stdout.split('error: ')[1].split('%')[0] * 1;

                assert(errorPercent < 0.1, "Visual comparison: '" + ssName + "' are " + errorPercent + "% different");
            });
        })
});