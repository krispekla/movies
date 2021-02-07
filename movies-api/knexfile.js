require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB__CONNECTION,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DB_CONNECTION,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};
