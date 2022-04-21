var http = require('http');
var ex = require('./execute');

// create table if it does not already exist
var text = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
ex.execute(text).then(result => {
  if (result) {
      console.log('Table created');
  }
});


// create a server object:
http.createServer(function (req, res) {
  res.write('FINN IS SO COOL :)'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080