describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })
  it('should load with initial state', () => {
    cy.getByTestId('email-status').should('have.attr','title','Campo obrigatório')
  })
})
