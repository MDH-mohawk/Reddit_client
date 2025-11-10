describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/UXDesign')
    cy.url().should('include','/UXDesign')
    cy.get('#gamedev').click()
    cy.url().should('include','gamedev')
  })
})

describe('Modal post selection',() => {
  it('The right item shows up', () =>{
    cy.visit('http://localhost:3000/UXDesign');
    cy.get('.post').first().click();
    cy.get('#go_back_button_modal');
  })
})