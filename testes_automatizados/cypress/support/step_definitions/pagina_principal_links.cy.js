import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que eu acesso a pagina Principal", () => {
  cy.visit("https://qualidade.apprbs.com.br/site");
  cy.url().should('eq','https://qualidade.apprbs.com.br/site');
});

When(/^clico no link "([^"]*)"$/, (link) => {
   cy.get(link).click();
});

When(/^clico no botao de evento de posicao "([^"]*)"$/, (posicao) => {
  const index = Number(posicao);
  cy.get('a:contains("INSCREVA-SE AGORA!")')
    .eq(index)
    .as('botaoAlvo');
});



Then("devo ver a secao {string}", (Secao) => {
  cy.get(Secao).should('be.visible');
});

Then("deve abrir o link {string}", (urlEsperada) => {
    cy.get('@botaoAlvo')
    .should('have.attr', 'target', '_blank')
    .and('have.attr', 'href')
      .should('include', urlEsperada); 
});
