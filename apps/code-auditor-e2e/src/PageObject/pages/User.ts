export class UserPage {

  static addUser( FName: string, LName:string, email:string, password:string, ConfirmPassword:string, option:string){
    cy.login('admin@admin.com','admin123');
    cy.get('a').contains('Add User').click();
    cy.datacy('firstName').type(FName);
    cy.datacy('lastName').type(LName);
    cy.datacy('email').type(email);
    cy.datacy('password').type(password);
    cy.datacy('confirmPassword').type(ConfirmPassword);
    cy.datacy('role').click();
    cy.get('mat-option').contains(option).click();
    cy.get('button').contains('Add User').click();
    cy.contains('Successfully added user!');
  }

  static editUser(FName:string,LName:string, PName:string, email:string, option:string){
    cy.server();
    cy.route('PATCH','/users/**').as('patchUpdate');
    cy.login('admin@admin.com','admin123');
    cy.contains('Pema Thai').click();
    cy.contains('h1','Pema Thai Details');
    cy.get('button').contains('Edit User').click();
    cy.datacy('fName').find('input').clear().type(FName);
    cy.datacy('lName').find('input').clear().type(LName);
    cy.datacy('pName').find('input').clear().type(PName);
    cy.datacy('email').find('input').clear().type(email);
    cy.datacy('role').click();
    cy.get('mat-option').contains(option).click();
    cy.get('button').contains('Update').click().wait('@patchUpdate');
    cy.contains('User Updated');
  }
}
