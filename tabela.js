
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

  colunaIdChamado.innerHTML = idChamado;
  colunaUnidade.innerHTML = unidade;
  colunaDescricao.innerHTML = descricao;
  colunaEstado.innerHTML = estado;
  colunaEditar.innerHTML = '<i class="fas fa-edit edit-icon" onclick="editarChamado(this)"></i>';
  colunaExcluir.innerHTML = '<i class="fas fa-trash delete-icon" onclick="confirmarExclusao(this)"></i>';

  // Exibir o contêiner da tabela
  document.getElementsByClassName("table-container")[0].style.display = "block";

  // Limpar os campos de entrada após o registro
  document.getElementById("id-chamado").value = "";
  document.getElementById("unidade").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("estado").value = "";

  // Salvar os dados atualizados
  salvarDados();
}
function showLoading() {
  var button = document.getElementById("register-button");
  button.innerHTML = "Carregando...";
  button.disabled = true;

  // Simular um carregamento ou enviar uma solicitação ao servidor
  // Aqui você pode adicionar o código para fazer o registro ou qualquer outra ação necessária

  // Exemplo de atraso de 2 segundos antes de retornar ao texto original do botão
  setTimeout(function() {
    button.innerHTML = "Registrar";
    button.disabled = false;
  }, 2000);
}
