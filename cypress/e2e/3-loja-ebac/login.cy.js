///<reference types="cypress"/>

describe('Funcionalidade: Login', () =>{

    it('Deve fazzer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('adriano.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, adriano.teste (não é adriano.teste? Sair)')
    })
})