// Lista de cidades
let cidades = ["Florianópolis", "São Paulo", "Recife", "Salvador", "Rio de Janeiro", "Porto Alegre", "Teresina"];

// Estrutura de repetição
for (let i = 0; i < cidades.length; i++) {
  console.log("Cidade: " + cidades[i]);

  // Verifica se a cidade é Salvador
  if (cidades[i] === "Salvador") {
    console.log("Encontramos Salvador na posição: " + (i + 1));
    break; // Para a execução
  }
}
