describe('Prueba de Login - Ejemplo Módulo 12', () => {
  it('Debe cargar la página de inicio correctamente', () => {
    // Visitamos una página de prueba
    cy.visit('https://example.cypress.io');

    // Verificamos que el título contenga la palabra "Cypress"
    cy.contains('Cypress').should('be.visible');
  });
});
