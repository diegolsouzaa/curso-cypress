/// <reference types="cypress"/>

describe('Should test at functional level', ()=>{

    let token

    before(()=>{
        cy.getToken("diego1608@email.com", '1234').then(tkn =>{
            token = tkn
        })
        
    })

    beforeEach(()=>{

        cy.getToken('diego1608@email.com', '1234').then(token=>{
            cy.request({
                method: 'GET',
                url: '/reset',
                headers: {Authorization:`JWT ${token}`}
            }).its('status').should('be.equal', 200)
    
        })

    })

    it('Should create an account', ()=>{
        //criar um objeto que vai conter todas as propriedades necessárias para o request
        cy.request({
            
            url: '/contas',
            method: 'POST',
            // essa api usa o jwt para autenticação
            headers: {Authorization:`JWT ${token}`},
            body:{  
                nome: 'conta rest2'
            }

        }).as('response')

        cy.get('@response').then(res=>{
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'conta rest2')
        })
    })

})

