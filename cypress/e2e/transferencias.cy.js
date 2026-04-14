describe('TRansferências', () => {
    beforeEach(() => {
        //Login
        cy.visit('/')
        cy.fazerLoginComCredenciasValidas()

    })

    it('Deve transferir quando informo dados e valor válidos', () => {
        // Act
        cy.realizarTransferencia( 'Maria', 'João da Silva', '11')

        // Assert
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
        // Act
        cy.realizarTransferencia( 'Maria', 'João da Silva', '5000.01')

        // Assert
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })    
})