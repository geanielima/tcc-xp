import '../testFunction/login'
import { verificarCredencialInvalida, clicarEmLogout, clicarPerfil, verificarCredencial, verificarExibicaoPerfil, verificarTelaInicialLogin } from '../testFunction/login';

describe('Login no Orange HRM', () => {
    it('Realizar o login bem sucedido', () => {
      cy.login('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login','Admin','admin123')
      verificarExibicaoPerfil()
    });

    it('Login com credenciais inválidas', () => {
        cy.login('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login','Admin12','admin00')
        verificarCredencialInvalida()
    })

    it('Logout bem sucedido', () => {
        cy.login('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login','Admin','admin123')
        clicarPerfil()
        cy.wait(2000)
        clicarEmLogout()
        verificarTelaInicialLogin()
    })
});