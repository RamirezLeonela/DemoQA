describe('Formulario de texto', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box');

    // Ignorar errores de scripts externos
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('Completa el formulario y verifica resultados', () => {
    cy.get('#userName').type('Leonela Tester');
    cy.get('#userEmail').type('leonela@example.com');
    cy.get('#currentAddress').type('Dirección actual');
    cy.get('#permanentAddress').type('Dirección permanente');

    cy.get('#submit').click();

    cy.get('#output').should('be.visible');
    cy.get('#name').should('contain', 'Leonela Tester');
    cy.get('#email').should('contain', 'leonela@example.com');
  });
});
