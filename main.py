from fastapi import FastAPI

app = FastAPI()

tarefas = []

@app.get("/tarefas")
def listar_tarefas():
    return tarefas

@app.post("/tarefas")
def criar_tarefa(tarefa: str):
    tarefas.append(tarefa)
    return {"message": "Tarefa criada com sucesso!"}

@app.put("/tarefas/{id}")
def atualizar_tarefas(id: int, nova_tarefa: str):
    tarefas[id] = nova_tarefa
    return {"message": "Tarefa atualizada com sucesso!"}

@app.delete("/tarefas/{id}")
def retirar_tarefa(id: int):
    tarefas.pop(id)
    return {"message": "Tarefa removida com sucesso!"}