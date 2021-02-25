declare namespace Cypress{
  interface Chainable {
    datacy(selector:string): Chainable<Element>
  }
}
