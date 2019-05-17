
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'Final Fantasy VII', genre: 'Role-Playing', releaseYear: 1997},
        {title: 'Mega Man X', genre: 'Action Platform', releaseYear: 1993},
        {title: 'The King of Fighters 98', genre: 'Fighting', releaseYear: 1998},
        {title: 'Street Fighter III 3rd Strike', genre: 'Fighting', releaseYear: 1999}
      ]);
    });
};
