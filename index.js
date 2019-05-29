const express = require('express');
const server = express();

const postRoutes = require('./posts/postRoutes');

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json('wow, look at you typing all this code');
});

server.use('/api/posts', postRoutes);

server.listen(8000, () => {
  console.log('\n**** hellurr from port 8000 ****\n');
});