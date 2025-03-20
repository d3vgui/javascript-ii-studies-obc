const imoveis = []
let opcao

do {

opcao = prompt(
  "CADASTRO DE IMÓVEIS\n" +
  "Imóveis cadastrados: " + imoveis.length +
  "\n\n1. Cadastrar imóvel" +
  "\n2. Mostrar imóveis cadastrados" +
  "\n3. Sair"
)

switch (opcao){
  case "1":
    const infoImovel = {}

    infoImovel.proprietario = prompt("Por favor, informe o nome do proprietário do imóvel.")
    infoImovel.quartos = parseFloat(prompt("Por favor, informe a quantidade de quartos do imóvel."))
    infoImovel.banheiros = parseFloat(prompt("Por favor, informe a quantidade de banheiros do imóvel."))
    infoImovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

    const confirma = confirm(
      "Salvar este imóvel?\n" +
      "\nProprietário: " + infoImovel.proprietario +
      "\nQuartos: " + infoImovel.quartos +
      "\nBanheiros: " + infoImovel.banheiros +
      "\nPossui Garagem? " + infoImovel.garagem
    )

    if (confirma) {
      alert("Aguarde...")
      imoveis.push(infoImovel)
      alert("Imóvel cadastrado com sucesso!")
      alert("Voltando ao menu...")
    } 
    else {
      alert("Para cadastrar o imóvel, você precisa confirmar as informações.")
    }

  break

  case "2":
    for (let i = 0; i < imoveis.length; i++) {
      alert(
        "Imóvel " + (i + 1) +
        "\nProprietário: " + imoveis[i].proprietario +
        "\nQuartos: " + imoveis[i].quartos +
        "\nBanheiros: " + imoveis[i].banheiros +
        "\nPossui Garagem? " + imoveis[i].garagem
      )
    }
  break

  case "3":
    alert("Saindo...")
  break

  default:
    alert("Opção inválida.")
  break
}

} while (opcao != 3)