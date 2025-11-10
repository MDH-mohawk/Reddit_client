describe('Responsive view', () => {
  it('menu collapses', () => {
    cy.visit('http://localhost:3000/UXDesign');
    cy.viewport(450,750);
    cy.get(".collapse_arrow").click();
    cy.get(".uncollapse_arrow").click();
  })
  it('pressing a category in the collapse menu', () => {
    cy.visit('http://localhost:3000/UXDesign');
    cy.viewport(450,750);
    cy.get(".collapse_arrow").click();
    cy.get('.categories_overview_mobile').find('#GameDevelopment').click();
    cy.get('.uncollapse_arrow').click();
  })
})
