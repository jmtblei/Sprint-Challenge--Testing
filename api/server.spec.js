const server = require('./server');
const request = require('supertest');
const db = require('../data/dbConfig');

describe('server', () => {
    it('sets env to testing', () => {
        expect(process.env.DB_ENV).toBe("testing");
    });
    describe("GET /", () => {
        it('recieves a 200 status code', async () => {
          const response = await request(server).get("/");
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
})
