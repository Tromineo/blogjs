const express = require('express');
//cria uma instancia do express
//o que é o express? é um framework. ele cria um servidor web
const postsRouter = require('./routes/posts');
//aqui é criado o servidor via express
//express() é uma função que cria uma instância da aplicação
const app = express();
//tem que dizer pro express 'configurar' a leitura de json
app.use(express.json());
//aqui é onde a gente 'conecta' as rotas do postsRouter com o caminho /posts
app.use('/posts', postsRouter);
//aqui é onde o servidor começa a rodar, e a gente pode acessar via localhost:3000/posts
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});