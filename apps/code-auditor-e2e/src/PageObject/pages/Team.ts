export class TeamPage {
  static addTeam(tName:string, date:number, teamOption:string, memberOption:string){
    cy.login('admin@admin.com','admin123');
    cy.get('a').contains('Add Team').click();
    cy.datacy('tName').type(tName);
    cy.get('mat-datepicker-toggle').find('button').click();
    cy.get('td').contains(date).click();
    cy.datacy('teamLead').click();
    cy.get('mat-option').contains(teamOption).click();
    cy.datacy('teamMember').click();
    cy.get('mat-option').contains(memberOption).click();
    cy.get('button').contains('Add Member').click();
    //cy.datacy('teamMember').should('be.visible');
    cy.get('button').contains('Add Team').click();
    cy.get('a').contains('Teams').click();
    cy.get('a').contains(tName);
  }

  static editTeam(tName:string,teamName:string,date:number,teamOption:string,memberOption:string){
    cy.server();
    cy.route('PATCH','/teams/**').as('teamUpdate')
    cy.login('admin@admin.com','admin123');
    cy.get('a').contains('Teams').click();
    cy.get('a').contains(tName).click();
    cy.contains('h1', tName);
    cy.get('button').contains('Edit').click();
    cy.datacy('teamName').find('input').clear().type(teamName);
    cy.datacy('dateEstd').find('input').clear();
    cy.datacy('dateEstd').find('button').click();
    cy.get('mat-calendar').contains(date).click();
    cy.datacy('teamLead').click();
    cy.get('mat-option').contains(teamOption).click();
    cy.datacy('teamMember').click();
    cy.get('mat-option').contains(memberOption).click();
    cy.get('button').contains('Add Member').click();
    cy.get('mat-card').contains(memberOption);
    cy.get('button').contains('Update Team').click().wait('@teamUpdate');
    cy.contains('Updated Team');
  }
}
