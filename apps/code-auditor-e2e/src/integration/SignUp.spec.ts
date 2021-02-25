import {SignUp} from '../PageObject/pages/SignUp';
import {PendingApproval} from '../PageObject/pages/PendingApproval';

describe('SignUp', ()=>{

  it('Register new user by filling all the forms and login', ()=> {
    cy.visit('/auth/login');
    SignUp.signUp('Tester1', 'Test1','test1.test@com','123abc', '123abc','BE');
    cy.login('test.test@com','123abc');
    cy.get('button').contains('Login').click();
    cy.get('selise-start-unapproved-user').should('contain','ADMIN has not Approved of you yet');
  })

  it('Get Admin approval and Login', () => {
    PendingApproval.adminApproval('Tester1 Test1');
    cy.login('test1.test@com','123abc')
  })


})
