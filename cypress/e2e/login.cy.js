describe('Login', () => {

  beforeEach(() => {
    // Arrange
    cy.visit('/')

    /*
        cy.env(['url']).then((url) => {
          cy.log(url)
    
          cy.visit('url')
        })
    
    */
    cy.screenshot('apos-visitar-pagina')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {

    // Act
    cy.fazerLoginComCredenciasValidas()

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  //it.only('Login com dados inválidos deve apresentar mensagem de erro', () => {
  it('Login com dados inválidos deve apresentar mensagem de erro', () => {

    // Act
    cy.fazerLoginComCredenciasInvalidas()

    // Assert
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})