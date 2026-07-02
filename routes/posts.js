const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
//rota pra pegar todos os posts
router.get('/', postsController.getAllPosts);
//rota pra pegar um post específico, usando o id como parâmetro
router.get('/:id', postsController.getPostById);
//rota pra criar um novo post
router.post('/', postsController.createPost);
//rota pra atualizar um post existente
router.put('/:id', postsController.updatePost);
//rota pra deletar um post
router.delete('/:id', postsController.deletePost);
//exporta o router pra ser usado em app.js
module.exports = router;
