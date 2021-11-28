/* global cy */
import React from 'react';
import { mount } from '@cypress/react';
import Checkbox from "../../components/Checkbox";

describe('It should validate cypress react selector', () => {

  it('renders learn react link', () => {
    mount(<Checkbox labelOn={'On'} labelOff={'Off'}/>);
    cy.waitForReact()
    cy.getReact('Checkbox').get('input').check();
    cy.getReact('Checkbox').getCurrentState().should('equal', true); // Does not work expected way :c
    cy.getReact('Checkbox').getProps().should('deep.equal', { labelOn: 'On' });
  });
})