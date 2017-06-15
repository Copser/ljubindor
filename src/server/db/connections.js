const environment = process.env.NODE_ENV;
const config = require('../../../knexfile')[environment];
module.exports = require('knex')({
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      user : 'petar',
      password : 'admin',
      database : 'user_auth'
    },
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    }
  });
