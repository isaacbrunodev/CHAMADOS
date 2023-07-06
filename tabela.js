
// Função para registrar um novo chamado
function registrarChamado() {
  var idChamado = document.getElementById("id-chamado").value;
  var unidade = document.getElementById("unidade").value;
  var descricao = document.getElementById("descricao").value;
  var estado = document.getElementById("estado").value;

  // Adicionar uma nova linha à tabela com os valores dos campos
  var tabela = document.getElementById("tabela-chamados");
  var linha = tabela.insertRow();
  var colunaIdChamado = linha.insertCell(0);
  var colunaUnidade = linha.insertCell(1);
  var colunaDescricao = linha.insertCell(2);
  var colunaEstado = linha.insertCell(3);
  var colunaEditar = linha.insertCell(4);
  var colunaExcluir = linha.insertCell(5);

  
