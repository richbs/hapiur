var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

function index(request, reply) {
  reply('Hello hapi');
}

function name(request, reply) {
  reply('Hello ' + request.params.name);
}

server.route({
  path: '/',
  method: 'GET',
  handler: index
});

server.route({
  path: '/{name}',
  method: 'GET',
  handler: name
});


server.start(function () {
  console.log('Server running at:',  server.info.uri);
});
