describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })
  it('should load with initial state', () => {
    cy.getByTestId('email-status').should('have.attr','title','Campo obrigatório')
    cy.getByTestId('password-status').should('have.attr','title','Campo obrigatório')
    cy.getByTestId('submit').should('have.attr','disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })
})
