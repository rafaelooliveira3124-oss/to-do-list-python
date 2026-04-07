# 📝 To-do List Full Stack

Aplicação full stack para gerenciar tarefas, com back-end em Python e interface web em HTML, CSS e JavaScript.

## 🖥️ Demonstração

> Adicione um GIF do projeto funcionando aqui

## 📋 Funcionalidades

- Adicionar tarefas
- Listar tarefas em flash cards
- Concluir tarefas com efeito visual
- Deletar tarefas
- Dados persistentes com banco de dados

## 🏗️ Arquitetura
[HTML/CSS/JS]  →  requisição HTTP  →  [FastAPI]  →  lê/salva  →  [SQLite]
↑
└──────────────  resposta JSON  ←─────────────────────────────────

## 🚀 Como usar

### Pré-requisitos
- Python 3.8 ou superior

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/rafaelooliveira3124-oss/to-do-list-python.git
cd to-do-list-python
```

2. Instale as dependências
```bash
pip install -r requirements.txt
```

3. Configure o arquivo `.env`
```bash
cp .env.example .env
```

4. Rode o servidor
```bash
python -m uvicorn main:app --reload
```

5. Abra o `index.html` no navegador

## 🛠️ Tecnologias utilizadas

### Back-end
- [Python 3](https://www.python.org)
- [FastAPI](https://fastapi.tiangolo.com)
- [SQLAlchemy](https://www.sqlalchemy.org)
- [SQLite](https://www.sqlite.org)
- [Uvicorn](https://www.uvicorn.org)

### Front-end
- HTML5
- CSS3
- JavaScript

## 📁 Estrutura do projeto

to-do-list-python/
├── main.py          # API REST com FastAPI
├── database.py      # configuração do banco de dados
├── models.py        # modelo da tabela de tarefas
├── index.html       # interface web
├── style.css        # estilização
├── script.js        # integração com a API
├── .env.example     # modelo de variáveis de ambiente
├── requirements.txt # dependências do projeto
└── README.md

## 🔗 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/tarefas` | Lista todas as tarefas |
| POST | `/tarefas` | Cria uma nova tarefa |
| PUT | `/tarefas/{id}/concluir` | Conclui uma tarefa |
| DELETE | `/tarefas/{id}` | Deleta uma tarefa |

## 📝 Aprendizados

- Criação de API REST com FastAPI
- Integração com banco de dados usando SQLAlchemy
- Persistência de dados com SQLite
- Consumo de API com JavaScript fetch
- Boas práticas com variáveis de ambiente
- Versionamento com Git e GitHub
- Arquitetura full stack