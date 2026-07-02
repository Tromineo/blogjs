# blog-nodejs

API REST de blog construída com **Node.js** e **Express 5**, sem banco de dados — os posts são persistidos em um arquivo JSON local (`data/posts.json`).

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Express 5](https://expressjs.com/)
- [nodemon](https://nodemon.io/) (desenvolvimento)

## Estrutura

```
blog-nodejs/
├── app.js                    # Ponto de entrada da aplicação
├── routes/
│   └── posts.js              # Definição das rotas
├── controllers/
│   └── postsController.js    # Lógica dos endpoints
├── models/
│   └── post.js               # Acesso e persistência dos dados (JSON)
└── data/
    └── posts.json            # Banco de dados em arquivo
```

## Instalação

```bash
# Clone o repositório e instale as dependências
npm install
```

## Execução

```bash
# Produção
npm start

# Desenvolvimento (reinicia automaticamente ao salvar)
npm run dev
```

O servidor sobe em `http://localhost:3000` por padrão.  
Defina a variável de ambiente `PORT` para usar outra porta:

```bash
PORT=4000 npm start
```

## Endpoints

Base URL: `http://localhost:3000`

| Método | Rota          | Descrição                  |
|--------|---------------|----------------------------|
| GET    | `/posts`      | Lista todos os posts       |
| GET    | `/posts/:id`  | Retorna um post pelo ID    |
| POST   | `/posts`      | Cria um novo post          |
| PUT    | `/posts/:id`  | Atualiza um post existente |
| DELETE | `/posts/:id`  | Remove um post             |

### Exemplos

**Criar post**
```bash
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Meu primeiro post", "conteudo": "Olá, mundo!"}'
```

**Listar posts**
```bash
curl http://localhost:3000/posts
```

**Buscar por ID**
```bash
curl http://localhost:3000/posts/1234567890
```

**Atualizar post**
```bash
curl -X PUT http://localhost:3000/posts/1234567890 \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Título atualizado"}'
```

**Deletar post**
```bash
curl -X DELETE http://localhost:3000/posts/1234567890
```

### Respostas de erro

| Status | Situação                        |
|--------|---------------------------------|
| 404    | Post não encontrado pelo ID     |
