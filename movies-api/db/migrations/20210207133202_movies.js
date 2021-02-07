exports.up = (knex, Promise) => {
  return knex.schema.createTable('movies', (table) => {
    table.increments();
    table.string('title').notNullable().unique();
    table.string('genre').notNullable();
    table.string('info').notNullable();
    table.integer('rating').notNullable();
    table.string('rated').notNullable();
    table.string('img').nullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('movies');
};
