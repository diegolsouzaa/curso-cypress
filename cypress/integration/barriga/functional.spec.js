/// <reference types="cypress"/>

describe('Should test at functional level', ()=>{

    before(()=>{
        cy.visit('http://barrigareact.wcaquino.me/')
        cy.get('.input-group > .form-control').type('diego1608@email.com')
        cy.get(':nth-child(2) > .form-control').type('1234')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain','Bem vindo')
    })

    it('Should Create an account', ()=>{

        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('conta teste2')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain','Conta inserida com sucesso')


        



    })
})

