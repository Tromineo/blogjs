const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/posts.json');
/** Método para ler dados do arquivo JSON */
function readData() {
  if (!fs.existsSync(dataPath)) return [];
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
}
/**Método para escrever dados */
function writeData(posts) {
  fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2));
}

module.exports = {
  getAll() {
    return readData();
  },
  getById(id) {
    return readData().find(p => p.id === id);
  },
  create(post) {
    const posts = readData();
    const newPost = { ...post, id: Date.now().toString() };
    posts.push(newPost);
    writeData(posts);
    return newPost;
  },
  update(id, data) {
    const posts = readData();
    const idx = posts.findIndex(p => p.id === id);
    if (idx === -1) return null;
    posts[idx] = { ...posts[idx], ...data };
    writeData(posts);
    return posts[idx];
  },
  delete(id) {
    let posts = readData();
    const initialLen = posts.length;
    posts = posts.filter(p => p.id !== id);
    writeData(posts);
    return posts.length < initialLen;
  }
};
