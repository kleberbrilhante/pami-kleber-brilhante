function SomaSimples (){ //função
    return 3 + 4
}

console.log (SomaSimples()) //metodo

function SomaComParametros(n1,n2){
    return n1+n2 //o return seria a solicitação da resposta ao computador
}

console.log(SomaComParametros(10,4))


//funçoe anonima
//arrow function

const Potencia0 = (n,e) =>{
    return Math.pow(n,e)
}

console.log(Potencia0(2,3))

//ops2

const Potencia = (n,e) =>{
    console.log(`${n} elevado a ${e} é ${Math.pow(n,e)}`) //dessa maneira apresentamos o resultado juntamente com a função, tudo em uma linha de codigo
}

Potencia(2,3)


//exercicio
//Função que calcule a média do aluno e exiba o resultado
//media >= 6,00 = Aprovado
//media >= 4,00 || < 6,00 = Recuperação
//media < 4,00 = Reprovado



function Media(n0, n1, n2) {
    return (n0 + n1 + n2) / 3;
  }
  
  function verificar(media) {
    if (media >= 6) {
      return "Aprovado";
    } else if (media >= 4 || media < 6) {
      return "Recuperação";
    } else {
      return "Reprovado";
    }
  }
  

  let nota0 = 2.5;
  let nota1 = 6.0;
  let nota2 = 3.5;
  
  let mediaFinal = Media(nota0, nota1, nota2);
  let situacao = verificar(mediaFinal);
  
  console.log(`Média: ${Math.round(mediaFinal)}`); 
  console.log(`Situação: ${situacao}`);