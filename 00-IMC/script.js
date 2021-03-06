const apresentarImc = () => {
  let nome = document.getElementById('nome').value;
  let altura = parseFloat(document.getElementById('altura').value);
  let peso = parseFloat(document.getElementById('peso').value);
  let resultado = document.getElementById('resultado');
  let mensagem = ``;

  let valueIMC = verificarInput(nome, altura, peso);
  valueIMC != false ? (
    classificarImc(valueIMC),
    mensagem = `${nome}: seu imc está em ${valueIMC}. ${classificarImc(valueIMC)}`
    ) : mensagem = `Por favor, digite os campos corretamente!`;

  resultado.textContent = mensagem;
}

const verificarInput = (nome, altura, peso) => {
  if(nome !== '' && altura !== '' && peso !== ''){
    return calcularImc(peso, altura); 
  } else {
    return false;
  }
}

const calcularImc = (peso, altura) => (peso / (altura ** 2)).toFixed(2);

const classificarImc = (valueIMC) => {
  let classificacao = ``;

  if(valueIMC < 18.5){
    classificacao = `Você está abaixo do peso ideal.`;
  } else if (valueIMC < 25) {
    classificacao = `Você está com peso ideal.`;
  } else if (valueIMC < 30){
    classificacao = `Você está levemente acima do peso.`;
  } else if (valueIMC < 35){
    classificacao = `Você está com obsedidade grau 1.`;
  } else if (valueIMC < 40){
    classificacao = `Você está com obsedidade grau 2.`;
  } else {
    classificacao = `Você está com obsedidade grau 3. Cuidado.`;
  }
  return classificacao;
} 

const btnCalcular = document.getElementById('calcular').addEventListener('click', apresentarImc);