/// <reference types="cypress"/>

describe('Work with basic elements', ()=>{
    it('Text', ()=>{
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
        //cy.get('body').should('contain','Cuidado')
        //para encontrar se tem em algum lugar o 'Cuidado'
        cy.get('.facilAchar').should('contain','Cuidado')
        //para encontrar o texto todo
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...')
    })

    it.only('Link', ()=>{
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text','Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text','Voltou!')


    })


})