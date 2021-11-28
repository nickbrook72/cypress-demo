describe('My First Test', () => {
  it('should display the form after clicking the button', () => {
    cy.visit('/')
    cy.get('button').click();
    cy.get('input').type('1234');

    cy.get('p').should('contain.text', '1236');
  })
})
