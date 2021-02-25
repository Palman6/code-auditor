import {TeamPage } from '../PageObject/pages/Team';

describe('Admin Add Team', ()=>{
  it.only('should validate Team Add',()=>{
    cy.login('admin@admin.com','admin123');
    cy.get('a').contains('Add Team').click();
    cy.datacy('tName').find('input').focus().blur();
    cy.datacy('tName').should('have.class','mat-form-field-invalid');
    cy.datacy('dateEstd').find('input').focus().blur();
    cy.datacy('dateEstd').should('have.class','mat-form-field-invalid');
    cy.datacy('teamLead').find('mat-select').focus().blur();
    cy.datacy('teamLead').should('have.class','mat-form-field-invalid');
    cy.get('button').contains('Add Team').click();
    cy.contains('There has to be atleast one team member');

  })
  it('Admin should add a Team', ()=>{
    TeamPage.addTeam('Test admin', 21, 'admin','asd fgh');
  })

  it('Admin should Edit Teams', ()=>{
    TeamPage.editTeam('Tester','Test Team',24,'Pem Som','Sangay Dema');
    })
})
