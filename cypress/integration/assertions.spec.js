/// <reference types="cypress"/>

it('equality', ()=>{
const a = 1;
expect(a).equal(1);
expect(a, 'deveria ser 1').equal(2)

})