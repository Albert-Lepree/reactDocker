const {Client} = require('pg')

// connection info
const client = new Client({
    user: 'main',
    host: 'db',
    database: 'funcPrototype',
    password: 'K00lc@ts1',
    port: 5432,
  });

// connection function
exports.connect = async () => {
    try {
        client.connect();
        return "connected"
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

// close connection function
exports.closeConnect = async () => {
    try {
        client.end();         // closes connection
        return "connection closed"
    } catch (error) {
        console.error(error.stack);
        return false;
    }
}

// execute query passed in
exports.execute = async (query) => {
    try {
        await client.query(query);  // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
  };

// returns all clients
exports.getAllClients = async () => {
    sql = "SELECT * FROM clients"
    try {
        allClients = await client.query(sql);
        return allClients;
    } catch  (error) {
        console.error(error.stack);
        return "error";
    } 
};