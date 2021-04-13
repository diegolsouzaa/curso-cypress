/// <reference types="cypress"/>

describe('Work with iframe', ()=>{

    it.only('deve preencher campo de texto', ()=>{
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe=>{
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield').type('ola')
            .should('have.value', 'ola')
        })
    })

    it.only('deve validar frame diretamente', ()=>{
        cy.visit('http://www.wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('windown:alert', msg=>{
            expect(msg).equal('Click OK!')
        })



    })


})    

