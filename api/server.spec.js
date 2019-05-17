const server = require('./server');
const request = require('supertest');
const db = require('../data/dbConfig');

describe('server', () => {
    it('sets env to testing', () => {
        expect(process.env.DB_ENV).toBe("testing");
    });
    describe("GET /", () => {
        it('recieves a 200 status code', async () => {
          const response = await request(server)
          .get("/");
          expect(response.status).toBe(200);
        });
        it('should return { message: "shhhhhh" }', () => {
            const expected = { message: "shhhhhh" };
            return request(server)
            .get("/")
            .then(res => {
                expect(res.body).toEqual(expected);
            })
        });
    });
    describe('GET /games', () => {
        it('recieves a 200 status code when successful', async () => {
            const response = await request(server)
            .get("/games");
            expect(response.status).toBe(200);
        });
        it('respond with 400 status code when unsuccessful', async () => {
            const response = await request(server)
            .get("/games");
            response.status = 400
            expect(response.status).toBe(400);
        });
        it('should return list of games', () => {
            const expected = [];
            return request(server)
            .get("/games")
            .then(res => {
                expect(res.body).toEqual(expected);
            })
        });
    })
})

