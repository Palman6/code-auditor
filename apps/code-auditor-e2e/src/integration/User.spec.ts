import {UserPage} from '../PageObject/pages/User';

describe('Admin Add user', ()=>{

  it.only('Checking validation on add user', () => {
    cy.login('admin@admin.com','admin123');
    cy.get('a').contains('Add User').click();
    cy.datacy('firstName').find('input').focus().blur();
    cy.datacy('firstName').should('have.class', 'mat-form-field-invalid');
    cy.datacy('lastName').find('input').focus().blur();
    cy.datacy('lastName').should('have.class', 'mat-form-field-invalid');
    cy.datacy('email').find('input').focus().blur();
    cy.datacy('email').should('have.class','mat-form-field-invalid');
    cy.datacy('password').find('input').focus().blur();
    cy.datacy('password').should('have.class','mat-form-field-invalid');
    cy.datacy('confirmPassword').find('input').focus().blur();
    cy.datacy('confirmPassword').should('have.class','mat-form-field-invalid');
    cy.datacy('role').find('mat-select').focus().blur();
    cy.datacy('role').should('have.class','mat-form-field-invalid');

  })

  it('Add user by Admin', ()=>{
    UserPage.addUser('Pema','Thai','som@fir.com','1234as','1234as','UI');
  })
  it('should Edit User details', () =>{
    UserPage.editUser('Pema','Thai','Pema Thai','pem@thi.com','UI');
  })
})
