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

      // resto
      let restoSaldo = saldo % 5

      // Juros compostos
      let jurosCompostos =
        saldo * (1 + taxa / 100) ** anos

      // precedência
      let exemploConta =
        (saldo + deposito) * 2

      saldo += 50

      saldo -= 20

      saldo *= 2

      saldo /= 2

      saldo **= 2

      saldo %= 1000

      document.getElementById("resultado").innerHTML = `

        <strong>Saldo final:</strong>
        R$ ${saldo.toFixed(2)}

        <div class="linha"></div>

        <strong>Rendimento:</strong>
        R$ ${rendimento.toFixed(2)} <br>

        <strong>Metade do saldo:</strong>
        R$ ${metadeSaldo.toFixed(2)} <br>

        <strong>Resto da divisão:</strong>
        ${restoSaldo} <br>

        <strong>Juros compostos:</strong>
        R$ ${jurosCompostos.toFixed(2)} <br>

        <strong>Conta com precedência:</strong>
        ${exemploConta.toFixed(2)}

      `
}