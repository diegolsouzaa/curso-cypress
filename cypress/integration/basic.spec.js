/// <reference types="cypress"/>

describe('Cypress basics', ()=>{

    it.only('Should visit a page and assert title',()=>{
    cy.visit('http://www.wcaquino.me/cypress/componentes.html')

    cy.title().should('to.be.equal', 'Campo de Treinamento')
    cy.pause()

    cy.title().should('contain', 'Campo').debug()

    cy.title().should('to.be.equal', 'Campo de Treinamento').should('contain', 'Campo')

    cy.title().should('be.equal', 'Campo de Treinamento').and('contain', 'Campo')

    })

    it('Should find and interact with an element ...', ()=>{
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click()
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')
        cy.get('#buttonSimple').click().should('have.value', 'Obrigado!')

    })

})