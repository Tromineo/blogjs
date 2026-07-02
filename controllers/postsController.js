const Post = require('../models/post');

exports.getAllPosts = (req, res) => {
  const posts = Post.getAll();
  res.json(posts);
};

exports.getPostById = (req, res) => {
  const post = Post.getById(req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post não encontrado' });
  }
};

exports.createPost = (req, res) => {
  const newPost = Post.create(req.body);
  res.status(201).json(newPost);
};

exports.updatePost = (req, res) => {
  const updated = Post.update(req.params.id, req.body);
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).json({ error: 'Post não encontrado' });
  }
};

exports.deletePost = (req, res) => {
  const deleted = Post.delete(req.params.id);
  if (deleted) {
    res.json({ message: 'Post removido' });
  } else {
    res.status(404).json({ error: 'Post não encontrado' });
  }
};
