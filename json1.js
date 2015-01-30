var http=require("https");

var options = {
  hostname: 'api.github.com',
  path: '/users/forvaidya/repos',
  method: 'GET',
  headers: { 'User-Agent': 'Mozilla/5.0' }
};


var req = http.request(options, function(res) {

 // console.log('STATUS: ' + res.statusCode);
 // console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
}); 
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body

req.end();