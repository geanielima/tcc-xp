import '../testFunction/projetos'
import { addUmProjeto,clicarBotaoDeletar, clicarBotaoPesquisar, clicarBotaoVisualizar, clicarEmConfirmarDelecao, clicarEmMyInfo, clicarSaveButton, digitarNomeCliente, digitarNomeProjeto, procurarNomeProjeto, selecionarOpcao, verificarContactDetails, verificarPersonalDetails, verificarRemocaoComSucesso, verificarSeProjetoFoiCriadoComSucesso, verificarTelaDoCandidato } from '../testFunction/projetos';

describe('Visualização de perfil e criação/deleção de projetos', () => {
    it('Visualizar meu perfil', () => {
        cy.login('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login','Admin','admin123')
        clicarEmMyInfo()
        verificarPersonalDetails()
        verificarContactDetails()
    });

    it('Visualizar Perfil do candidato', () => {
        cy.login('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates','Admin','admin123')
        clicarBotaoVisualizar()
        verificarTelaDoCandidato()
    });

    

    it('Cadastrar um projeto', () => {
        cy.login('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewProjects','Admin','admin123')
        addUmProjeto()
        digitarNomeProjeto()
        digitarNomeCliente()
        cy.wait(2000)
        selecionarOpcao()
        clicarSaveButton()
        verificarSeProjetoFoiCriadoComSucesso()
    })

    it('Remover projeto', () => {
        cy.login('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewProjects','Admin','admin123')
        procurarNomeProjeto()
        cy.wait(2000)
        selecionarOpcao()
        clicarBotaoPesquisar()
        clicarBotaoDeletar()
        clicarEmConfirmarDelecao()
        verificarRemocaoComSucesso()
    })
});