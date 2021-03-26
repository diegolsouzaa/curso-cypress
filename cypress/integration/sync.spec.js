/// <reference types="cypress"/>

describe('', ()=>{
    before(()=>{
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{
        cy.reload()          

    })

    // interessante, o cypress aguarda o elemento aparecer de forma automatica
    it.only('deve aguardar o elemento estar disponivel', ()=>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('ola mundo')
    })

    it.only('deve fazer retentativas', ()=>{
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
    })


})

