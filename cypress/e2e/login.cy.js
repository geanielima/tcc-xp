import '../testFunction/login'
import { verificarCredencialInvalida, clicarEmLogout, clicarPerfil, verificarCredencial, verificarExibicaoPerfil, verificarTelaInicialLogin } from '../testFunction/login';

describe('Login no Orange HRM', () => {
    it('Realizar o login bem sucedido', () => {
        loginPage('Admin', 'admin123')
        cy.intercept('GET', '**/web/index.php/api/v2/dashboard/employees/action-summary**').as('getEmploymentStatuses');
        cy.wait('@getEmploymentStatuses').then((interception) => {
            const response = interception.response;
            expect(response.statusCode).to.eq(200);
          });
      verificarExibicaoPerfil()
    });

    it('Login com credenciais inválidas', () => {
        loginPage('Admin11', 'admin11')
        verificarCredencialInvalida()
    })

    it('Logout bem sucedido', () => {
        loginPage('Admin', 'admin123')
        cy.intercept('GET', '**/web/index.php/api/v2/dashboard/employees/action-summary**').as('getEmploymentStatuses');
        cy.wait('@getEmploymentStatuses').then((interception) => {
            const response = interception.response;
            expect(response.statusCode).to.eq(200);
          });
        clicarPerfil()
        cy.wait(2000)
        clicarEmLogout()
        verificarTelaInicialLogin()
    })
});