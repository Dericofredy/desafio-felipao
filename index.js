// Inicializa as variáveis do herói
const nomeHeroi = prompt("Digite o nome do herói:");
let xpHeroi = 0;
let antLoop= true;//literalmente um anti loop
while (antLoop) {
    const entrada = prompt("Digite '0' para ver a experiência ou a quantidade de experiência ganha (ou digite 0 para encerrar):");
  
    /* Essa condição não foi solicitado pelo professor, mas achei interessante acrescentar uma saída e a opção de desistir do héroi */
    
    if (entrada === "x") {
      // Exibe a experiência atual do herói
      console.log("O heroi " + nomeHeroi + " decidiu parar, suas experiência e de :"+xpHeroi);
      antLoop=false;//força a sair do loop da função while
    } else {
      const ganhoXP = parseInt(entrada);
  
      if (ganhoXP === 0) {
        break; // Encerra o loop se o usuário digitar 0
      }
  
      xpHeroi += ganhoXP;//incrementa o valor de ganhoXP para xpHeroi a cada entrada do teclado
  
      let nivelHeroi=0;
  
      // Utiliza uma estrutura de decisão (if-else) para determinar o nível do herói
      //Comparando se o valor esta entre uma faixa usando AND (&&)
      
      
      if (xpHeroi < 1000) {
        nivelHeroi = "Ferro";
      } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivelHeroi = "Bronze";
      } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivelHeroi = "Prata";
      } else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
        nivelHeroi = "Ouro";
      } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        nivelHeroi = "Platina";
      } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        nivelHeroi = "Ascendente";
      } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivelHeroi = "Imortal";      
      } 
      else if (xpHeroi >=10001) {
        nivelHeroi = "Radiante";      
      }
          else {
        nivelHeroi = "Não se aplica";
      }
  
      // Exibe as informações do herói com concatenação
      console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi + " com " + xpHeroi + " de experiência. ");
    }
  }
  