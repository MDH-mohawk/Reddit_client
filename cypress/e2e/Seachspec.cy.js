describe('Searching', () =>{
  it('monster', () =>{
    cy.visit('http://localhost:3000/UXDesign');
    cy.get('#PalWorld').click()
    cy.get('input').type('monster');
    cy.get('form').submit();
  })
})