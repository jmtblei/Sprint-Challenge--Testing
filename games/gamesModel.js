const db = require('../data/dbConfig');

module.exports = {
    add,
    deleteGame
};

async function add(game) {
    return db("games")
    .insert(game);
}

async function deleteGame(id) {
    return db("games")
    .where("id", id)
    .del();
}