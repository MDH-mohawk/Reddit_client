describe('Getting back to posts',() => {
  it('Pushing the button', () =>{
    cy.visit('http://localhost:3000/UXDesign');
    cy.get('.post').first().click();
    cy.get('#go_back_button_modal').click();
  })
})