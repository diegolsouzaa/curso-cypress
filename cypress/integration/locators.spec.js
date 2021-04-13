/// <reference types="cypress"/>

describe('work', ()=>{

    before(()=>{
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')

    })

    beforeEach(()=>{
        cy.reload()

    })

    it('using jquery selector', ()=>{
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input').click()


    })

    it('using xpath', ()=>{

        cy.xpath('//input')
    })




})