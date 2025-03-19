const qntdCartas = [];
let opcao;

do {
  opcao = prompt(
    "PILHA DE CARTAS\n" +
      "Quantidade de cartas: " +
      qntdCartas.length +
      "\n\n1. Adicionar uma carta" +
      "\n2. Puxar uma carta" +
      "\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const novaCarta = prompt(
        "Por favor, informe o nome da carta para ser adicionada."
      );
      qntdCartas.unshift(novaCarta);
      alert("Aguarde...");
      alert("Carta adicionada com sucesso!");
      break;

    case "2":
      alert("Aguarde...");
      if (qntdCartas.length <= 0) {
        alert("Não há cartas no baralho.");
      } else {
        const cartaRetirada = qntdCartas.shift();
        alert("Carta retirada: " + cartaRetirada);
        alert("Voltando ao menu...");
      }
      break;

    case "3":
      alert("Saindo...");
      break;

    default:
      alert("Opção inválida.");
      break;
  }
} while (opcao != 3);
