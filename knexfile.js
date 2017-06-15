module.exports = {
  development: {
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
  }
};
