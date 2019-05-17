const server = require('./server');
const request = require('supertest');
const db = require('../data/dbConfig');

describe('server', () => {
    it('sets env to testing', () => {
        expect(process.env.DB_ENV).toBe("testing");
    });
})
