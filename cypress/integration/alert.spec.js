/// <reference types="cypress"/>

describe('Work with alerts', ()=>{
    before(()=>{
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')

    })

    beforeEach(()=>{
        cy.reload()
    })

    it('Alert', ()=>{

        cy.get('#alert').click()
        cy.on('window:alert', msg=>{
            console.log(msg)
            expect(msg).equal('Alert Simples')

        })
    })

    it('alert com mock', ()=>{
        
        // as serve para dar um nome para a chamada
        const stub = cy.stub().as('alerta')

        
        cy.on('window:alert',stub)
        cy.get('#alert').click().then(()=>{

            // valido que foi chamado 1 vez só e que contem o texto correto
            expect(stub.getCall(0)).calledWith('Alert Simples')
        })
    })

    it('Confirm', ()=>{

        cy.get('#confirm').click()

        cy.on('window:confirm', msg=>{
            expect(msg).equal('Confirm Simples')
        })
        cy.on('window:alert', msg=>{
            expect(msg).equal('Confirmado')
        })
    })

    it.only('Denied', ()=>{

        cy.get('#confirm').click()
        
        cy.on('window:confirm', msg=>{
            expect(msg).equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg=>{
            expect(msg).equal('Negado')
        })
    })

    it('Prompt', ()=>{

        cy.window().then(win=>{
            cy.stub(win, 'prompt').returns('42')
        })

        cy.on('window:confirm', msg=>{
            expect(msg).equal('Era 42?')
        })

        cy.on('window:alert', msg=>{
            expect(msg).equal(':D')
        })

        cy.get('#prompt').click()       
    })

    it.only('validando msg', ()=>{

        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub )

        cy.get('#formCadastrar').click()
        .then(() => expect(stub.getCall(0))
        .calledWith('Nome eh obrigatorio'))

        cy.get('#formNome').type('Diego')
        cy.get('#formCadastrar').click()
        .then(() => expect(stub.getCall(1))
        .calledWith('Sobrenome eh obrigatorio'))

        cy.get('[data-cy=dataSobrenome]').type('Souza')
        cy.get('#formCadastrar').click()
        .then(() => expect(stub.getCall(2))
        .calledWith('Sexo eh obrigatorio'))

        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()

        cy.get('#resultado').should('contain', 'Cadastrado')
    })

})