const jsonServer = require('json-server');
const db = require('./data.json');
const server = jsonServer.create();
server.use(jsonServer.defaults());

const router = jsonServer.router(db);
server.use(router);

server.listen();

console.log('JSON server for the app todos is up and running!');