/// <reference types="cypress"/>

it('A external test...', ()=> {


})

describe('Should group tests', ()=> {

    describe('Should group more specific test', ()=>{
        it.skip('teste dentro do grupo', ()=>{

        })

    })
    it('A internal test...', ()=>{

    })

})