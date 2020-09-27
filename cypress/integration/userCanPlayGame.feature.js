describe('User can play the rps game', () => {
  it('displays the landing page', () => {
    cy.visit('http://localhost:3001')
  })

  it('displays you lost', () => {
    cy.contains('Rock').click();
    cy.get('#computer-choice')
    cy.get('#result').should('contain', '')
  })  
})