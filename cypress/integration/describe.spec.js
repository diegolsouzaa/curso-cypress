/// <reference types="cypress"/>

it.only('A external test...', ()=> {


})

describe('Should group tests', ()=> {

    describe.skip('Should group more specific test', ()=>{
        it('teste dentro do grupo', ()=>{

        })

    })
    it('A internal test...', ()=>{

    })

})