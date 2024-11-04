import '../testFunction/funcionario'
import { buttonAddEmployee, clickButtonSave, clickOnPIMoptionOnMenu, createLoginDetails, fillLoginDetails, fillRequiredFilds, verifyMessageSuccesfully } from '../testFunction/funcionario';
import { loginPage } from '../testFunction/login';

describe('Criação,Atualização e deleção de funcionário', () => {
    


    it('Registrar um novo funcionário', () => {
        loginPage('Admin', 'admin123')
        cy.intercept('GET', '**/web/index.php/api/v2/dashboard/employees/action-summary**').as('getEmploymentStatuses');
        cy.wait('@getEmploymentStatuses').then((interception) => {
            const response = interception.response;
            expect(response.statusCode).to.eq(200);
          });
        clickOnPIMoptionOnMenu()
        buttonAddEmployee()
        fillRequiredFilds("geanelimabatista", "pratico", "devops")
        createLoginDetails()
        fillLoginDetails('geanelimabatista','pwd123456','pwd123456')
        clickButtonSave()

        cy.intercept('POST', '**/web/index.php/api/v2/admin/users**').as('salvarUserComSucesso');
        cy.wait('@salvarUserComSucesso').then((interception) => {
            const response = interception.response;
            expect(response.statusCode).to.eq(200);
          });
       
    });

    it('Atualizar detalhes do funcionário', () => {
        loginPage('Admin', 'admin123')
        cy.intercept('GET', '**/web/index.php/api/v2/dashboard/employees/action-summary**').as('getEmploymentStatuses');
        cy.wait('@getEmploymentStatuses').then((interception) => {
            const response = interception.response;
            expect(response.statusCode).to.eq(200);
          });
        clickOnPIMoptionOnMenu()
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

    it('Remover funcionário', () => {
        loginPage('Admin', 'admin123')
        cy.intercept('GET', '**/web/index.php/api/v2/dashboard/employees/action-summary**').as('getEmploymentStatuses');
        cy.wait('@getEmploymentStatuses').then((interception) => {
            const response = interception.response;
            expect(response.statusCode).to.eq(200);
          });
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('geanelimabatista pratico devops')
        cy.wait(1000)
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true })
        cy.wait(2000)
        cy.get('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').should('be.visible').click({ force: true })
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').should('be.visible').click({ force: true })
        cy.intercept('GET', '**/web/index.php/api/v2/pim/employees**').as('deletadoComSucesso');
        cy.wait('@deletadoComSucesso').then((interception) => {
            const response = interception.response;
            expect(response.statusCode).to.eq(200);
          });

    })
});