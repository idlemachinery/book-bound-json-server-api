const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Use default router mounted on an /api endpoint
server.use('/api', router);

server.listen(3000, () => {
    console.log(`JSON Server is running on port 3000\n`);
    console.log('http://localhost:3000/api/books');
    console.log('http://localhost:3000/api/authors\n\n');
});
