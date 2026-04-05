from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/tarefas")
def listar_tarefas(db: Session = Depends(get_db)):
    return db.query(models.Tarefa).all()

@app.post("/tarefas")
def criar_tarefa(titulo: str, db: Session = Depends(get_db)):
    tarefa = models.Tarefa(titulo=titulo)
    db.add(tarefa)
    db.commit()
    db.refresh(tarefa)
    return tarefa

@app.put("/tarefas/{id}")
def atualizar_tarefa(id: int, titulo: str, db: Session = Depends(get_db)):
    tarefa = db.query(models.Tarefa).filter(models.Tarefa.id == id).first()
    tarefa.titulo = titulo
    db.commit()
    return tarefa

@app.delete("/tarefas/{id}")
def deletar_tarefa(id: int, db: Session = Depends(get_db)):
    tarefa = db.query(models.Tarefa).filter(models.Tarefa.id == id).first()
    db.delete(tarefa)
    db.commit()
    return {"message": "Tarefa deletada com sucesso!"}