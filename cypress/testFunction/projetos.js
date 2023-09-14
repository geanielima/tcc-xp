


function clicarEmMyInfo(){
    cy.get(':nth-child(6) > .oxd-main-menu-item').click()
}

function verificarPersonalDetails(){
    cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').contains('Personal Details').should('be.visible')
}

function verificarContactDetails(){
    cy.get(':nth-child(2) > .orangehrm-tabs-item').contains('Contact Details').should('be.visible')
}

function addUmProjeto(){
    cy.get('.orangehrm-header-container > .oxd-button').click()
}

function digitarNomeProjeto(){
    cy.get(':nth-child(2) > .oxd-input').type('PROJETO APLICADO')
}

function digitarNomeCliente(){
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('k')
}

function selecionarOpcao(){
    cy.get('.oxd-autocomplete-option').click({force: true})
}

function verificarSeProjetoFoiCriadoComSucesso(){
    cy.get('.oxd-toast').should("include.text", "Successfully").and('be.visible')
}

function clicarSaveButton(){
    cy.get('.oxd-button--secondary').click()
}

function procurarNomeProjeto(){
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('PROJETO APLICADO')
}

function verificarRemocaoComSucesso(){
    cy.get('.oxd-toast').should("include.text", "Successfully").and('be.visible')
}

function clicarBotaoPesquisar(){
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
}

function clicarBotaoDeletar(){
    cy.get('.oxd-table-cell-actions > :nth-child(1)').click()
}

function clicarEmConfirmarDelecao(){
    cy.get('.oxd-button--label-danger').click()
}

function clicarBotaoVisualizar(){
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1)').click({force: true})
}

function verificarTelaDoCandidato(){
    cy.get('.oxd-form > .oxd-text--h6').contains('Application Stage').should('be.visible')
}
 

export {
    clicarEmMyInfo,
    verificarPersonalDetails,
    verificarContactDetails,
    addUmProjeto,
    digitarNomeProjeto,
    digitarNomeCliente,
    selecionarOpcao,
    verificarSeProjetoFoiCriadoComSucesso,
    clicarSaveButton,
    procurarNomeProjeto,
    verificarRemocaoComSucesso,
    clicarBotaoPesquisar,
    clicarEmConfirmarDelecao,
    clicarBotaoDeletar,
    clicarBotaoVisualizar,
    verificarTelaDoCandidato

}