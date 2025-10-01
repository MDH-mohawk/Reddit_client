describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/UXDesign')
    cy.url().should('include','/UXDesign')
    cy.get('#gamedev').click()
    cy.url().should('include','gamedev')
  })
})