import {potencia, maiorValor, menorValor, raizQuadrada } from "../index.js"
describe('Testes da Calculadora', () => {
    it('Deve retornar a potencia', () => {
        const esperado = 8
        const retornado = potencia(2,3)
        expect(retornado).toBe(esperado)
    })
    it('Deve retornar a Maior Valor', () => {
        const esperado = 10
        const retornado = maiorValor(10,5)
        expect(retornado).toBe(esperado)
    })
    it('Deve retornar a Menor Valor', () => {
        const esperado = 5
        const retornado = menorValor(10,5)
        expect(retornado).toBe(esperado)
    })
    it('Deve retornar a divisao', () => {
        const esperado = 3
        const retornado = raizQuadrada(9)
        expect(retornado).toBe(esperado)
    })
})