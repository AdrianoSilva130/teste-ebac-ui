///<reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.first()
        //.last()
        //.eq(2)
        .contains('Frankie Sweatshirt')
        .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')



    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')

    });

    it('Deve visitar a página do produto', () => {
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });

});