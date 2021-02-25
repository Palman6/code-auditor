export class PendingApproval {
  static adminApproval(userName:string){
    cy.server();
    cy.route('PATCH','users/**/').as('patchApproval');
    cy.login('admin@admin.com', 'admin123')
    cy.get('a').contains('Pending Approval').click();
    cy.datacy(userName).find('button').contains('Approve').click().wait('@patchApproval');
    cy.contains('Approved Successfully');
  }

}
