/// <reference types="cypress"/>

describe('Work with basic elements', ()=>{
    before(()=>{
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')

    })

    beforeEach(()=>{
        cy.reload()
    })


    it('Text', ()=>{
        //cy.get('body').should('contain','Cuidado')
        //para encontrar se tem em algum lugar o 'Cuidado'
        cy.get('.facilAchar').should('contain','Cuidado')
        //para encontrar o texto todo
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...')
    })

    it('Link', ()=>{
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text','Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text','Voltou!')


    })

    it('textFields', ()=>{

        cy.get('#formNome').type('Cypress Test')
        // em um campo de texto, temos que usar have.value
        cy.get('#formNome').should('have.value', 'Cypress Test')

        //quando pegamos o nome do elemento e rodamos o teste, ele deu erro, pois com 1 barra apenas ele dá problema, sendo necessario
        //colocar mais uma barra antes do :
        cy.get('#elementosForm\\:sugestoes').type('textarea').should('have.value', 'textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
        .type('nada')

        cy.get('[data-cy=dataSobrenome]').type('Teste12345{backspace}{backspace}')
        .should('have.value','Teste123')

        cy.get('#elementosForm\\:sugestoes').clear().type('Erro{selectall}acerto',{ delay : 100})
        .should('have.value','acerto')
        
    })

    it('radioButton', ()=>{
        cy.get('#formSexoFem').click()
        .should('be.checked')
        cy.get('#formSexoMasc')
        .should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length',2)

    })

    it.only('checkbox', ()=>{

        cy.get('#formComidaPizza').click().should('be.checked')

        cy.get('[name=formComidaFavorita]').click({multiple: true})

        cy.get('#formComidaPizza').should('not.be.checked')
    })

    it.only('combobox', ()=>{
        // para selecionar o item de um combo, podemos usar tanto o texto conforme esse teste ou ...
        cy.get('[data-test=dataEscolaridade]').select('2o grau completo')
        .should('have.value', '2graucomp')

        // ... o value conforme esse, porém para o assert, temos que verificar pelo value
        cy.get('[data-test=dataEscolaridade]').select('1graucomp')
        .should('have.value', '1graucomp')

        // TODO validar as opçoes exibidas no combo
    })

    it.only('comboMultiplo', ()=>{
        // em um combo multiplo, temos que selecionar pelo value e nao pelo texto
        cy.get('[data-testid=dataEsportes]').select(['natacao', 'Corrida', 'nada'])

        //TODO validar opçoes selecionadas do combo multiplo
        

    })
})



