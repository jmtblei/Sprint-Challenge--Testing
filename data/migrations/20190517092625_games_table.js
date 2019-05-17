
exports.up = function(knex, Promise) {
  return knex.schema.createTable("games", game => {
      game.increments();
      game
        .string("title")
        .notNullable();
      game
        .string("genre")
        .notNullable();
      game
        .integer("releaseYear")
        .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("games");
};
