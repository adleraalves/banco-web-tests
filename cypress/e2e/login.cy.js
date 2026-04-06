describe('Login', () => {

  beforeEach(() => {
    // Arrange
    cy.visit('http://localhost:4000')
    cy.screenshot('apos-visitar-pagina')
  })
  it('Login com dados válidos deve permitir entrada no sistema', () => {

    // Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    //cy.get('#login-section > .btn').click()
    cy.screenshot('apos-preencher-dados-validos')
    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos-clicar-botao-entrar')

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  //it.only('Login com dados inválidos deve apresentar mensagem de erro', () => {
  it('Login com dados inválidos deve apresentar mensagem de erro', () => {

    // Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('654321')
    //cy.get('#login-section > .btn').click()
    cy.contains('button', 'Entrar').click()

    // Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})