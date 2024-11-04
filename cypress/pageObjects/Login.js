class Login {

    LoginPage(email,senha) {
        cy.login('/web/index.php/auth/login', email,senha)
    }


}

export default new Login()