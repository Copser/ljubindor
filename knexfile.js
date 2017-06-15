module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'admin',
      database : 'auth_user'
    },
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    }
  }
};
