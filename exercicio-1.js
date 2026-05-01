// Definindo os valores
let valorCompra = 250;
let metodoPagamento = "dinheiro"; // pode ser "dinheiro" ou "cartao"
let frete;

// Estrutura de decisão
if (valorCompra > 200 && metodoPagamento === "dinheiro") {
  frete = 0;
} else if (valorCompra > 200 && metodoPagamento === "cartao") {
  frete = 20;
} else if (valorCompra <= 200 && metodoPagamento === "dinheiro") {
  frete = 30;
} else if (valorCompra <= 200 && metodoPagamento === "cartao") {
  frete = 50;
}

// Imprimindo os resultados
console.log("Valor da compra: R$" + valorCompra);
console.log("Método de pagamento: " + metodoPagamento);
console.log("Valor do frete: R$" + frete);

