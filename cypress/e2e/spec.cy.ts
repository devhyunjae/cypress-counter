describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4444')
    cy.contains('count is 0').click();
    cy.contains('count is 1').should('exist');
  })
})
