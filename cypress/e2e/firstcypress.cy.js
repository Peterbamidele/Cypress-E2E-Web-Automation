describe('My First Text', () => {
  it('Visit Orangehrmlive- Postive Test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','OrangeHRM')
  })


  it('Visit Orangehrmlive- Negative Test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','OrangeHRM123')
  })
})