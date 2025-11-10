describe('Modal post selection',() => {
  it('The right item shows up', () =>{
    cy.visit('http://localhost:3000/UXDesign');
    cy.get('.post').first().click();
    cy.get('#go_back_button_modal');
    cy.get('.comments').first().click();
    cy.get('.modal_post').get('.Commentlist').contains('comments')
  })
})