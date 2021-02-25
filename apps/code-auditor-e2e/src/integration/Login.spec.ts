describe('Login', ()=>{
  it('Should check validation on Login Page', ()=>{
    cy.visit('/auth/login');
    cy.datacy('email').find('input').focus().blur();
    cy.datacy('email').should('have.class','mat-form-field-invalid');
    cy.datacy('password').find('input').focus().blur();
    cy.datacy('password').should('have.class','mat-form-field-invalid');

  })
  it('should login using valid credentials', ()=>{
    cy.login('admin@admin.com','admin123');
  })
  it('should validate incorrect username and password', ()=>{
   cy.login('about@test.com','test');
   cy.get('form').should('contain', 'Sorry :( Credentials Dont Match!');
  })
})
