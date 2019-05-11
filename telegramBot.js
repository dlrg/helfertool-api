var https = require('https');

var options = {
  host: 'api.telegram.org',
  port: 443,
  path: '/bot739906439:AAGwX0n0WzUxVJzOm55jdKPs933IiJExwyU/getMe',
  method: 'GET'
};

https.request(options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end();
