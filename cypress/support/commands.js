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

const { setupEyes } = require('@applitools/eyes-cypress');

setupEyes({
  appName: 'personal-budget-frontend', 
  batchName: 'Dashboard Screen', 
  apiKey: 'tKDWgoPcjtErGQJjJ99Qz7PqdhdxZqqC98J9u2DEGvO9M110', 
  showLogs: true, 
});