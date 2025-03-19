const fila = [];
let opcao;

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "º - " + fila[i] + "\n";
  }

  opcao = prompt(
    "CONSULTÓRIO MÉDICO\n" +
      "Fila de espera: " + pacientes +
      "\n\n1. Novo paciente" +
      "\n2. Consultar paciente" +
      "\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Por favor, informe o nome do paciente:");
      fila.push(novoPaciente);
      alert("Aguarde...");
      alert("Paciente adicionado a fila de espera.");
      break;

    case "2":
      alert("Aguarde...");
      if (fila.length <= 0) {
        alert("Não há fila na fila de espera.");
      } else {
        const pacienteConsultado = fila.shift();
        alert("O nome do paciente a ser consultado é: " + pacienteConsultado);
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
