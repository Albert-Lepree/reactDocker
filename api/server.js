var http = require('http');
var ex = require('./query');
var url = require('url');

// create connection
ex.connect().then(result => {
  if (result) {
    console.log(result)
  }
});

// create table if it does not already exist
var text = "CREATE TABLE IF NOT EXISTS clients (name VARCHAR(255), location VARCHAR(255), apt_date date, apt_time time, notes VARCHAR(255))";
ex.execute(text).then(result => {
  if (result) {
      console.log('Table created');
  }
});

// test insert
text = "INSERT INTO clients (name, location) VALUES ('Finn', 'Swag Town USA');"
ex.execute(text).then(result =>{
  if (result) {
    console.log('Insert Success');
  }
});


// does not work -> runs before the schema migration and insert?
// ex.closeConnect().then(result => {
//   if (result) {
//     console.log(result)
//   }
// });




// create a server object:
http.createServer(function (req, res) {
  
  var q = url.parse(req.url, true);
  
  var qdata = q.query;
  console.log(qdata);
  sql = `INSERT INTO clients (name, location, apt_date, apt_time ) VALUES ('${qdata.name}', '${qdata.location}', '${qdata.date}', '${qdata.time}', '${qdata.notes}');`
  ex.execute(sql).then(result => {
    if (result) {
      console.log('Insert Success');
    }
  })

  res.write('FINN IS SO COOL :)'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080