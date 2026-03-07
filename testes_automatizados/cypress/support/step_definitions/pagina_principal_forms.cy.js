import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na pagina Principal", () => {
  cy.visit("https://qualidade.apprbs.com.br/site");
  cy.url().should('eq','https://qualidade.apprbs.com.br/site');
});


When("preencho o formulario:", (tabela) => {
  const dados = tabela.hashes()[0];
  
  cy.get(':nth-child(1) > .rb-form-field-input').type(dados.nome);
  cy.get(':nth-child(2) > :nth-child(2) > .rb-form-field-input').type(dados.email);
  cy.get('.iti > .rb-form-field-input').type(dados.telefone);
});

When("clico no botao Concluir", () => {
  cy.get('#rbBtnNext').click();
});

Then("recebo uma mensagem positiva", () => {
cy.get('.toast > ul > li', { timeout: 10000 })
  .should('not.have.text', 'É necessário informar a base legal')

})
