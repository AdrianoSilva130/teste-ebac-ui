/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('adriano.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, adriano.teste (não é adriano.teste? Sair)')
    })

it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('adrianoste@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
    cy.get('.woocommerce-error').should('exist')
});

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('adriano.teste@teste.com.br')
    cy.get('#password').type('teste@0001')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail adriano.teste@teste.com.br está incorreta.')
    cy.get('.woocommerce-error').should('exist')
});

})
