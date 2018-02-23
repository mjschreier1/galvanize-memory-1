
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resolution', table => {
    table.increments('id').primary();
    table.date('due_date');
    table.text('resolution');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('resolution')
};
