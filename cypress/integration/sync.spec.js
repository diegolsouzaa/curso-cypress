/// <reference types="cypress"/>

describe('', ()=>{
    before(()=>{
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{
        cy.reload()          

    })

    // interessante, o cypress aguarda o elemento aparecer de forma automatica, o timeout por padrao é 4 segundos.
    it('deve aguardar o elemento estar disponivel', ()=>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('ola mundo')
    })

    it('deve fazer retentativas', ()=>{
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
    })

    it.only('uso do find', ()=>{

        cy.get('#buttonList').click()
        cy.get('#lista li').find('span').should('contain', 'Item 1')

        // nao funciona, porque no momento do get, estava 'carregado' com o item 1
        // mesmo com a retentativa, ele só executa o find e o should, utilizando o tinha 'carregado' do get, que era o item 1
        // quando temos um erro, erro na assertiva, a retentativa só executa 1 comando anterior ao que falhou, no caso o find
        //cy.get('#lista li').find('span').should('contain', 'Item 2')

        //em situações que a tela demora pra carregar, o find pode atrapalhar, nesse caso o retry vai executar o get o should
        cy.get('#lista li span').should('contain', 'Item 2')
    })

    // o timeout do cypress por default é 4 segundos
    it.only('Uso do timeout', ()=>{

        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')

        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo', {timeout: 1000}).should('exist')

        //para mudar o timeout default do cypress, inserir no arquivo cypress.json o comando
        //"defaultCommandTimeout": 1000

        // cy.get('#buttonListDOM').click()
        // cy.wait(5000);
        // cy.get('#lista li span').should('contain', 'Item 2')

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', {timeout: 10000}).should('have.length', 1)

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', {timeout: 10000}).should('have.length', 2)

        cy.get('#lista li span').should('have.length', 1)
        cy.get('#lista li span').should('have.length', 2)






    })


})

