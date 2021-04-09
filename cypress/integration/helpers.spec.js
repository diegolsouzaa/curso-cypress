/// <reference types="cypress"/>

describe('helpers', ()=>{
    // o wrap serve pra converter um objeto javaScript em um objeto cypress
    it('wrap', ()=>{
        const obj = {nome:'User', idade:20}
        expect(obj).to.have.property('nome')
        // o obj nao tem esse metodo, o should é um metodo do cypress, pra resolver isso, temos que encapsular
        //obj.should('have.property', 'nome')

        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').type('funciona?')

    })

    it.only('its', ()=>{
        const obj = {nome:'User', idade:20}
        cy.wrap(obj).should('have.property', 'nome', 'User')

        // o its serve pra acessar apenas uma propriedade do objeto
        cy.wrap(obj).its('nome').should('be.equal', 'User')

        const obj2 = {nome:'User', idade:20, endereco: {rua:'nome da rua'}}
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'da')
        cy.wrap(obj2).its('endereco.rua').should('contain', 'da')

        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('equal', 20)




    })


})