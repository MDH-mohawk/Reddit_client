describe('Menu', () => {  
  it('pressing a category', () => {
    cy.visit('http://localhost:3000/UXDesign');
    cy.get('.categories_overview').find('#GameDevelopment').click();
  })
})