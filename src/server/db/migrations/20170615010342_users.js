
exports.up = function(knex, Promise) {
  return knex.shema.createTable('users', (table) => {
    table.increment();
    table.string('username').unique().notNullable;
    table.string('password').notNullable();
    table.boolean('admin').notNullable().defaultTo(false);
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.shema.dropTable('users');
};
