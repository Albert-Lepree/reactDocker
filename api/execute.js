const {Client} = require('pg')

// connection info
const client = new Client({
    user: 'main',
    host: 'db',
    database: 'funcPrototype',
    password: 'K00lc@ts1',
    port: 5432,
  });

exports.execute = async (query) => {
    try {
        await client.connect();     // gets connection
        await client.query(query);  // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();         // closes connection
    }
  };