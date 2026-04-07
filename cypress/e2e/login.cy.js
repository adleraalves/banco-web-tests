describe('Login', () => {

  beforeEach(() => {
    // Arrange
    cy.log('Iniciando...')


    cy.env(['url']).then((url) => {
      cy.log(url)

      cy.visit(url)
    })
    cy.screenshot('apos-visitar-pagina')
  })
  it.only('Login com dados válidos deve permitir entrada no sistema', () => {

    // Act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })

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
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    //cy.get('#login-section > .btn').click()
    cy.contains('button', 'Entrar').click()

    // Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})