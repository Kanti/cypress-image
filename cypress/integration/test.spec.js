/// <reference types="Cypress" />

context('submitting', () => {
  beforeEach(() => {
    cy.visit('/r/kanti/cypress')
  });

  it('has a tag', () => {
    cy.server();
    cy.route('/api/build/v1/source/?image=kanti/cypress').as('tagRequest');

    cy.get('a[data-testid=tags]').click();

    cy.wait('@tagRequest');
    cy.get('#mainContainer').should('not.contain', 'No tags available');
  });
});

