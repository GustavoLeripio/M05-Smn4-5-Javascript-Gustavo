function adicionarTarefa() {

    var nomeTarefa = document.getElementById('tarefa').value;

    if (nomeTarefa.trim() !== "") {

        var novaTarefa = document.createElement('li');
        novaTarefa.textContent = nomeTarefa;

        var botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.onclick = function() {
            removerTarefa(this);
        };

        novaTarefa.appendChild(botaoRemover);

        document.getElementById('listaTarefas').appendChild(novaTarefa);

        document.getElementById('tarefaForm').reset();
    }
}

function removerTarefa(botao) {
    var tarefa = botao.parentNode;

    tarefa.parentNode.removeChild(tarefa);
}
