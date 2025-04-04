# 📚 Aula 01 de JavaScript

## 🚀 Instalando o Node.js

Para rodar JavaScript no seu PC, você precisa instalar o **Node.js**. Baixe-o aqui: [https://nodejs.org/pt](https://nodejs.org/pt).

Depois de instalar, abra o terminal do VSCode e use o comando `node -v` para verificar a versão instalada 📊.

### 📝 Instalação no Windows

Se você estiver no Windows, pode seguir os passos abaixo para instalar o Node.js:

1. Acesse o site oficial do Node.js e baixe o instalador.
2. Execute o instalador e siga as instruções.
3. Certifique-se de que as opções "Node.js runtime", "npm package manager" e "Add to PATH" estejam selecionadas durante a instalação[1].

### 📝 Instalação no Linux

Para instalar no Linux (Ubuntu), use os comandos abaixo no terminal:

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verifique a instalação com `node -v` e `npm --version`[1][3].

---

## 📝 Comentários no Código

Para criar comentários no seu código, você pode usar:

- `//` para comentários em uma linha.
- `/* */` para comentários em múltiplas linhas.
- `Ctrl + ;` no VSCode para comentar rapidamente uma linha 📝.

---

## 📚 Conceitos de Variáveis

Existem três conceitos de variáveis em JavaScript:

### 1. **Var** 📝
Exemplo:
```javascript
var msg = "Eu quero!";
console.log(msg);
```
**Observação**: O uso de ponto e vírgula é opcional em JavaScript, mas é um bom padrão manter a consistência se começar a usar 📝.

### 2. **Let** 📈
Exemplo:
```javascript
let resposta = "Me de o que eu quero!";
console.log(resposta);
```
**Vantagens do Let**:
- Melhor gerenciamento de memória.
- Escopo de bloco (limitado ao bloco onde é declarado).
- Mais rápido e eficiente que `var` 🚀.

### 3. **Const** 🔒
Exemplo:
```javascript
const turma = "Eu s2 o 2ds";
console.log(turma);
```
**Características do Const**:
- Não pode ser reatribuída.
- Escopo de bloco.
- Usada para valores que não mudam 📝.

**Por que usar Const?**
- Para valores que não devem ser alterados durante a execução do programa.
- Para melhorar a legibilidade do código, indicando que um valor é constante 🔑.

---

Vamos formatar essas notas em Markdown para que fiquem mais organizadas e fáceis de ler. Aqui está a versão formatada:

## Concatenação em JavaScript

### Introdução

A concatenação de strings em JavaScript pode ser feita de várias maneiras. Aqui estão algumas formas comuns de concatenar strings, incluindo métodos mais práticos e limpos.

### Métodos de Concatenação

#### 1. Usando Vírgulas

Quando você usa vírgulas na função `console.log()`, os valores são separados por espaços automaticamente.

```javascript
let palavra01 = "Quero";
let palavra02 = "um";
let palavra03 = "Switch 2!";

console.log(palavra01, palavra02, palavra03); 
// Saída: "Quero um Switch 2!"
```

#### 2. Usando o Operador de Adição (`+`)

O operador de adição (`+`) junta as strings sem adicionar espaços entre elas.

```javascript
console.log(palavra01 + palavra02 + palavra03); 
// Saída: "QueroumSwitch 2!"
```

#### 3. Usando Template Literals

Template literals permitem uma forma mais limpa e prática de concatenar strings, além de permitir quebras de linha e expressões.

```javascript
console.log(`${palavra01}${palavra02}${palavra03} 
                \n ❤️❤️❤️❤️❤️❤️`);
```

### Exemplos Comparativos

Aqui estão exemplos comparativos de como a mesma frase pode ser formada usando diferentes métodos:

```javascript
console.log(palavra01, "um", palavra03);
console.log(palavra01 + "um" + palavra03);
console.log(`${palavra01}um ${palavra03}`);
```

Essas diferentes abordagens mostram como a concatenação pode ser realizada de maneiras distintas, cada uma com suas vantagens e desvantagens.



## 🚀 Próximos Passos

Agora que você tem o Node.js instalado e sabe sobre variáveis, está pronto para começar a explorar mais sobre JavaScript! 😊

### Recursos Adicionais

- **Documentação Oficial do Node.js**: [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)

