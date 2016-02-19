var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

function index(request, reply) {
  console.log(request);
  reply('Hello hapi');
}

server.route({
  path: '/',
  method: 'GET',
  handler: index
});


server.start(function () {
  console.log('Server running at:',  server.info.uri);
});
