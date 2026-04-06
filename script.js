function listarTarefas() {
    fetch("http://127.0.0.1:8000/tarefas")
        .then(resposta => resposta.json())
        .then(dados => {
            const lista = document.getElementById("lista-tarefas")
            lista.innerHTML = ""
            dados.forEach(tarefa => {
                const li = document.createElement("li")

                const titulo = document.createElement("span")
                titulo.textContent = tarefa.titulo
                if (tarefa.concluida) {
                    titulo.classList.add("concluida")
                    }

                const divBotoes = document.createElement("div")
                divBotoes.style.display = "flex"
                divBotoes.style.gap = "5px"

                const btnConcluir = document.createElement("button")
                btnConcluir.textContent = "✅"
                btnConcluir.onclick = () => concluirTarefa(tarefa.id)

                const btnDeletar = document.createElement("button")
                btnDeletar.textContent = "🗑️"
                btnDeletar.onclick = () => deletarTarefa(tarefa.id)

                divBotoes.appendChild(btnConcluir)
                divBotoes.appendChild(btnDeletar)
                li.appendChild(titulo)
                li.appendChild(divBotoes)
                lista.appendChild(li)
            })
        })
}

listarTarefas()

function adicionarTarefa() {
    const input = document.getElementById("input-tarefa")
    const titulo = input.value 

    if (titulo === "") {
        alert("Digite uma tarefa!")
        return
    }

    fetch("http://127.0.0.1:8000/tarefas?titulo=" + titulo, {
        method: "POST"
    })

        .then(resposta => resposta.json())
        .then(() => {
            input.value = ""
            listarTarefas()
    })
    
}

document.getElementById("btn-adicionar").addEventListener("click", adicionarTarefa)

function deletarTarefa(id) {
    fetch("http://127.0.0.1:8000/tarefas/" + id, {
        method: "DELETE"
    })
        .then(() => listarTarefas())
}

function concluirTarefa(id) {
    fetch("http://127.0.0.1:8000/tarefas/" + id + "/concluir", {
        method: "PUT"
    })
        .then(() => listarTarefas())
}