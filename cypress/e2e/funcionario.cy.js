import Funcionarios from "../pageObjects/Funcionarios";
import Login from "../pageObjects/Login";

describe('Criação,Atualização e deleção de funcionário', () => {
    it('Registrar um novo funcionário', () => {
        Login.LoginPage('Admin', 'admin123')
        cy.intercept('GET', '**/web/index.php/api/v2/dashboard/employees/action-summary**').as('getEmploymentStatuses');
        cy.wait('@getEmploymentStatuses').then((interception) => {
            const response = interception.response;
            expect(response.statusCode).to.eq(200);
          });
        Funcionarios.clickOnPIMoptionOnMenu()
        Funcionarios.buttonAddEmployee()
        Funcionarios.fillRequiredFilds("trabalho", "pratico", "devops")
        Funcionarios.createLoginDetails()
        Funcionarios.fillLoginDetails('geane','pwd123456','pwd123456')
        Funcionarios.clickButtonSave()
        cy.wait(2000)
        Funcionarios.verifyMessageSuccesfully()
    });

    it('Atualizar detalhes do funcionário', () => {
        cy.login('/web/index.php/auth/login', 'Admin', 'admin123')
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('trabalho pratico devops')
        cy.wait(1000)
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true })
        cy.wait(2000)
        cy.get('.oxd-table-cell-actions > :nth-child(2)').click()
        cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('nuuu')
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('0321')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('61901-280')
        cy.get(':nth-child(3) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('41909922')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('9929292')
        cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click({ force: true })
        cy.get(':nth-child(7) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('No')
        cy.get(':nth-child(2) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({ force: true })
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
        cy.get('.oxd-toast').should("include.text", "Successfully Updated")
    })

    it.only('Remover funcionário', () => {
        Login.LoginPage('Admin', 'admin123')
        cy.intercept('GET', '**/web/index.php/api/v2/dashboard/employees/action-summary**').as('getEmploymentStatuses');
        cy.wait('@getEmploymentStatuses').then((interception) => {
            const response = interception.response;
            expect(response.statusCode).to.eq(200);
          });
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('trabalho pratico devops')
        cy.wait(1000)
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true })
        cy.wait(2000)
        cy.get('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click()
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').should('be.visible').click()
        cy.get('.oxd-toast').should('have.text', 'success')

    })
});