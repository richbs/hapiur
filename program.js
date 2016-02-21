'use strict';

var Hapi = require('hapi');
var Inert = require('inert');
var Path = require('path');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.register(Inert, function (err) {
    if (err) throw err;
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
  handler: {
    file: Path.join(__dirname, 'index.html')
  }
});

server.route({
  path: '/{name}',
  method: 'GET',
  handler: name
});


server.start(function () {
  console.log('Server running at:',  server.info.uri);
});
