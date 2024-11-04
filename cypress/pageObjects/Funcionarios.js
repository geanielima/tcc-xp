class Funcionarios {


    fillRequiredFilds(firstName,middleName,lastName){
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(firstName)
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').should('be.visible').type(middleName)
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('be.visible').type(lastName)
    }

    clickOnPIMoptionOnMenu(){
        cy.get(':nth-child(2) > .oxd-main-menu-item').click({ force: true })
    }

    buttonAddEmployee(){
        cy.get('.orangehrm-header-container > .oxd-button').click()
    }

    createLoginDetails(){
        cy.get('.oxd-switch-input').should('be.visible').click()
    }

    fillLoginDetails(user,password,confirmPassword){
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user)
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(confirmPassword)
    }

    clickButtonSave(){
        cy.get('.oxd-button--secondary').click()
    }

    verifyMessageSuccesfully(){
        cy.get('.oxd-toast').should("include.text", "Successfully")
    }

}

export default new Funcionarios()
