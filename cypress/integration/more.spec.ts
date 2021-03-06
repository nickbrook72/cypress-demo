describe('My First Test', () => {
  it('should display the form after clicking the button', () => {
    cy.visit('/')
    cy.get('button').click();

    cy.get('[data-testid="name-input"]').type('1234');

    cy.get('.results').within( () => {
      cy.get('p.name').should('contain.text', '1234');
    })

    // select a fish
    cy.findByTestId('fish-input').click();
    cy.findByRole('option', {name: 'Cod'}).click();

    cy.get('.results .fish').should('contain.text', 'Cod')
  });
})
