/* global cy */

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Check checkbox class', () => {
    const checkbox = cy.get('[type="checkbox"]');
    checkbox.check();
    checkbox.should('have.class', 'checked');
  });

  it('Click article', () => {
    const article = cy.get('article');
    article.click();
    article.should('contain.text', 'clicked')
      .should('have.class', 'clicked')
      .should('have.css', 'background-color', 'rgb(0, 128, 0)');

    article.click();
    article.should('not.contain.text', 'clicked')
      .should('not.have.class', 'clicked')
      .should('not.have.css', 'background-color', 'rgb(0, 128, 0)');
    article.click();
  });

  it('Type into material ui input', () => {
    const input = cy.get('nav input');
    input.type('Hello');
    input.should('exist').should('have.value', 'Hello');
  });

  it('Imitate resize', () => {
    cy.viewport(499, 600);
    cy.get('.App').should('have.css', 'display', 'block');
  });
})