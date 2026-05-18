function calcularBanco(){
      let saldo = Number(prompt("Digite o saldo inicial"))
      let deposito = Number(prompt("Digite o valor do depósito"))
      let saque = Number(prompt("Digite o valor do saque"))
      let taxa = Number(prompt("Digite a taxa de juros"))
      let anos = Number(prompt("Digite os anos do investimento"))

      //Saldo total da conta
      saldo = saldo + deposito

      // Saque
      saldo = saldo - saque

      // Rendimento
      let rendimento = saldo * (taxa / 100)

      // Meta de Saldo 
      let metadeSaldo = saldo / 2

      // resto da divisão
      let saldo_par = saldo % 2 == 0

      // Juros compostos
      let jurosCompostos =
        saldo * (1 + taxa / 100) ** anos

      saldo += 50

      saldo -= 20

      saldo *= 2

      saldo /= 2

      saldo **= 2

      document.getElementById("resultado").innerHTML = `

        <strong>Saldo:</strong>
        R$ ${saldo.toFixed(2)} <br>

        <strong>Rendimento:</strong>
        R$ ${rendimento.toFixed(2)} <br>

        <strong>Metade do saldo:</strong>
        R$ ${metadeSaldo.toFixed(2)} <br>

        <strong>Saldo é:</strong>
        ${saldo_par ? 'número par' : 'número impar'} <br>

        <strong>Juros compostos:</strong>
        R$ ${jurosCompostos.toFixed(2)} <br>

      `
      /*
      if(teste){
        //executa um bloco de codigo
      }else{
        // executa outro
      }
      */
      //teste ? resultado se for verdade : resultado se for falso -> ternario no JS
}

function limparCaixa(){
    document.getElementById("resultado").innerHTML = ``
}