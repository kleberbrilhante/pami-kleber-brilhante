// Concatenação

// Definição das palavras
let palavra01 = "Quero";
let palavra02 = "um";
let palavra03 = "Switch 2!";

// Exemplo de concatenação com vírgula (não é concatenação real, apenas impressão separada)
console.log(palavra01, palavra02, palavra03);

// Exemplo de concatenação com o operador '+'
console.log(palavra01 + palavra02 + palavra03);

// Exemplo de concatenação com template literals (crases)
console.log(`${palavra01} ${palavra02} ${palavra03} \n ❤️❤️❤️❤️❤️❤️`);

// Exemplo de como a mesma frase pode ser formada de diferentes maneiras
console.log(palavra01, "um", palavra03); // Impressão separada
console.log(palavra01 + "um" + palavra03); // Concatenação com '+'
console.log(`${palavra01} um ${palavra03}`); // Concatenação com template literals

// Sugestão adicional: usar const para variáveis que não mudam
const palavra04 = "JavaScript";
console.log(`Estou aprendendo ${palavra04}.`);
