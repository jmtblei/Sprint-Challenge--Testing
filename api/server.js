const express = require('express');

const server = express();
const Games = require('../games/gamesModel');

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ message: 'shhhhhh' });
});

server.get('/games', async (req, res) => {
    try {
        const games = await Games.get();
        res.status(200).send(games);
    } catch(err) {
        res.status(500).send(err);
    }   
});

module.exports = server;