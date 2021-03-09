/// <reference types="cypress"/>

it('equality', ()=>{
const a = 1;
expect(a).equal(1);
expect(a, 'deveria ser 1').equal(1);
expect(a).to.be.equal(1);
expect(a).not.to.be.equal("b");

})

it ('truthy', ()=>{
const a = true;
const b = null;
let c;

expect(a).to.be.true;
expect(true).to.be.true;
expect(b).to.be.null;
expect(a).to.be.not.null;
expect(c).to.be.undefined;
})

it('Object equality', ()=>{
const obj = {
    a:1,
    b:2
}

expect(obj).equal(obj)
expect(obj).to.be.equal(obj)

//verifica as propriedades do objeto, se tirar o deep não funciona
expect(obj).to.be.deep.equal({a:1, b:2})

// mesma validade do deep
expect(obj).eql({a:1, b:2})

//verifica o valor de 1 propriedade do objeto
expect(obj).include({a: 1})
expect(obj).to.have.property('b')
expect(obj).to.have.property('b',2)
expect(obj).to.not.be.empty
expect({}).to.be.empty
})

it('Arrays', ()=>{
    const arr = [1,2,3]
    expect(arr).to.have.members([1,2,3])
    expect(arr).to.include.members([1,3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
    expect([]).to.be.an('array')
})

it('types', ()=>{

    const num = 1;
    const str = "text"

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
})

it('string', ()=>{

    const str = 'string de teste'
    expect(str).to.be.equal('string de teste')
    expect(str).to.have.length(15)
    expect(str).to.have.contains('de')

    //regex - verifica se começa com a palavra string
    expect(str).to.match(/^string/)

    //regex - verifica se termina com a palavra teste
    expect(str).to.match(/teste$/)

    //regex - verifica se tem apenas letras, o '+' significa pra aceitar como verdadeiro se tiver 1 ou mais letras
    expect(str).to.match(/\w+/)
    //regex - verifica se nao existem numeros
    expect(str).to.match(/\D+/)

})

it('numbers', ()=>{

    const number = 4;
    const floatNumber = 5.2123

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3)
    expect(number).to.be.below(7)

    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.2, 0.1)


})