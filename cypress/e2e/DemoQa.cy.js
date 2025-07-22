describe('DemoQA Homepage', () => {
  it('Visita la página y verifica el título', () => {
    // Visitar la página
    cy.visit('https://demoqa.com/')

    // Verificar que el título contiene "DEMOQA"
    cy.title().should('include', 'DEMOQA')
  })
})
