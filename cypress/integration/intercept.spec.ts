describe('My First Test', () => {
  it('should display the form after clicking the button', () => {
    cy.intercept({pathname: '/fish'}, [{id: 5, name: 'Turbot'}]).as('fewerFish');
    cy.visit('/')

    cy.get('button').click();
    cy.findByTestId('fish-input').click();
    cy.findByRole('option', {name: 'Turbot'}).click();
  });
})
