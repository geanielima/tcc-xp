export function clicarEmLogout(){
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
}

export function verificarTelaInicialLogin(){
    cy.get('.oxd-text--h5').contains('Login').should('be.visible')
}

export function clicarPerfil(){
    cy.get('.oxd-userdropdown-tab').click()
}

export function loginPage(email,senha) {
    cy.login('/web/index.php/auth/login', email,senha)
}

export function verificarExibicaoPerfil(){
    cy.get('.oxd-userdropdown-tab').should('be.visible')
}

export function verificarCredencialInvalida(){
    cy.get('.oxd-alert-content').contains('Invalid credentials').should('be.visible')
}