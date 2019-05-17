const db = require('../data/dbConfig');
const Games = require('./gamesModel');

describe('games model', () => {
    afterEach(async () => {
        await db("games").truncate();
    });
    describe('add()', () => {
        it('should add a game wite title, genre, and releaseYear', async () => {
            await Games.add({
                title: 'game1',
                genre: 'genre1',
                releaseyear: '2001'
            });
            const game = await db("games");
            expect(game).toHaveLength(1)
        });
    });
    describe('deleteGame()', () => {
        it('should delete a game', async() => {
            const game = { name: 'game1' };
            const removed = await Games.deleteGame(game);
            expect(removed).toBe(0);
        })
    })
})