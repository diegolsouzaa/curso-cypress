/// <reference types="cypress"/>

describe('Work with popup', ()=>{

    it.only('deve validar se o popup foi invocado', ()=>{
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
        cy.window().then(win=>{
            cy.stub(win,'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')
    })

    it('nada', ()=>{
        cy.visit('http://www.wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('windown:alert', msg=>{
            expect(msg).equal('Click OK!')
        })
    })
})  

describe.only('with links', ()=>{

    before(()=>{
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')

    })

    it('check popurl', ()=>{
        cy.contains('Popup2').should('have.prop', 'href').and('equal', 'http://www.wcaquino.me/cypress/frame.html')

    })

    it('deve acessar a popup dinamica', ()=>{

        cy.contains('Popup2').then($a=>{
            const href = $a.prop('href')
            cy.visit(href)
            cy.get('#tfield').type('funciona')
        })

    })





})

