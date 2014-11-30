var port = process.env.PORT;
var Hapi = require('hapi');
var server = new Hapi.Server(port, {
  cors: {
    matchOrigin: false
  }
});
var email = require('./controllers/email');


//Mailgun Routes
server.route(
    { method: 'POST', path: '/sendMail', handler: email.send }
);


//Loading plugins and THEN running a server
server.pack.register(require('./plugins'), startServer);

//start hapi server
function startServer(err){
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
}
