const form = document.getElementById('agenda-contatos');

const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
});

// Função para formatar o número de telefone
function formatarTelefone(telefone) {
    // Remover tudo o que não for número
    telefone = telefone.replace(/\D/g, '');

    // Verificar se o número tem exatamente 11 dígitos (formato comum de celular no Brasil)
    if (telefone.length === 11) {
        // Formatar o número para (XX) XXXXX-XXXX
        telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        return telefone;
    } else {
        return null; // Retorna null se o número for inválido
    }
}

function adicionarLinha() {
    const nomeAgenda = document.getElementById('nome-agenda');
    const telefoneAgenda = document.getElementById('tel-agenda');

    // Formatar o número de telefone antes de adicionar à tabela
    const telefoneFormatado = formatarTelefone(telefoneAgenda.value);

    // Se o telefone for inválido, mostra uma mensagem e não adiciona a linha
    if (!telefoneFormatado) {
        alert("Digite o numero corretamente");
        nomeAgenda.value = ''; // Limpa o campo de nome
        telefoneAgenda.value = ''; // Limpa o campo de telefone
        return; // Não faz mais nada se o número for inválido
    }

    let linha = '<tr>'; // Criação da linha da tabela
    linha += `<td>${nomeAgenda.value}</td>`; // Adiciona o nome
    linha += `<td>${telefoneFormatado}</td>`; // Adiciona o telefone formatado
    linha += '</tr>'; // Fechamento da linha da tabela
    linhas += linha; // Adiciona a linha ao conteúdo da tabela

    nomeAgenda.value = ''; // Limpa o campo de nome
    telefoneAgenda.value = ''; // Limpa o campo de telefone
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody'); // Seleciona o corpo da tabela
    corpoTabela.innerHTML = linhas; // Insere as linhas na tabela
}
