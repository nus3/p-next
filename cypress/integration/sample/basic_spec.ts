describe('The Store Page', () => {
  it('success loads', () => {
    cy.visit('/store')

    cy.contains('update').click()
    cy.get('p').contains(28)

    cy.contains('reset').click()
    cy.contains('addHistory').click()
    cy.contains('home').click()
  })
})
