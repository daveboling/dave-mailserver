'use strict';


var api_key = process.env.MAIL_KEY;
var domain = process.env.MAIL_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

exports.send = function (request, reply){
  var data = {
    from: 'daviddboling@gmail.com',
    to: 'kadowki@gmail.com',
    subject: 'Portfolio Inquiry:' + request.payload.name,
    text: 'Phone Number: ' + request.payload.phone + '\n' +
      'Email: ' + request.payload.email + '\n\n' +
      request.payload.body
  };

  mailgun.messages().send(data, function (error, body){
    reply(body);
  });
};
