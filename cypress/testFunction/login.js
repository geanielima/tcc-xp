function clicarEmLogout(){
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
}

function verificarTelaInicialLogin(){
    cy.get('.oxd-text--h5').contains('Login').should('be.visible')
}

function clicarPerfil(){
    cy.get('.oxd-userdropdown-tab').click()
}

function verificarExibicaoPerfil(){
    cy.get('.oxd-userdropdown-tab').should('be.visible')
}

function verificarCredencialInvalida(){
    cy.get('.oxd-alert-content').contains('Invalid credentials').should('be.visible')
}



export {
    verificarExibicaoPerfil,
    clicarPerfil,
    clicarEmLogout,
    verificarTelaInicialLogin,
    verificarCredencialInvalida
}