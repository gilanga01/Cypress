/// <reference types = "cypress" />

describe('First Test', () => {
  it('passes', () => {
    cy.visit('https://www.safaricom.co.ke/')
    cy.get('.item-1878 > a').click();
    cy.get('#mainsearch', {timeout: 6000}).click();
    cy.get('#final_result').click().type('Data bundles {enter}')
  
  })

  it.only('login test', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type( 'Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get(':nth-child(1) > .oxd-main-menu-item').click();
    cy.get('.orangehrm-header-container > .oxd-button').click();
    cy.get('.oxd-button--secondary')



  })
})
