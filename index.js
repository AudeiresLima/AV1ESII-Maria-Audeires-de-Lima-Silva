const Math = require('mathjs');

function potencia(base, expoente) {
  return Math.pow(base, expoente);
}

function maiorValor(valor1, valor2) {
  return Math.max(valor1, valor2);
}

function menorValor(valor1, valor2) {
  return Math.min(valor1, valor2);
}

function raizQuadrada(numero) {
  return Math.sqrt(numero);
}

module.exports = {
  potencia,
  maiorValor,
  menorValor,
  raizQuadrada,
};