/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Should test at functional level', ()=>{

    before(()=>{
        // cy.visit('http://barrigareact.wcaquino.me/')
        // cy.get(loc.LOGIN.USER).type('diego1608@email.com')
        // cy.get(loc.LOGIN.PASSWORD).type('1234')
        // cy.get(loc.LOGIN.BTN_LOGIN).click()
        // cy.get(loc.MESSAGE).should('contain','Bem vindo')
        cy.login()
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/reset"]').click()
    })

    it('Should create an account', ()=>{
        cy.acessarMenuConta()
        cy.inserirConta('conta teste')
        cy.get(loc.MESSAGE).should('contain','Conta inserida com sucesso')
    })

    it('Should update an account', ()=>{

        cy.acessarMenuConta()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME).clear().type('conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain','Conta atualizada com sucesso')
        


    })
})

