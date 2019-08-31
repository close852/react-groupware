const mysql = require('mysql');

jest.mock('mysql');

const mockOptions = {
    host: 'localhost',
    user: "admin",
    password: "password"
}


describe('Testing how Mocking works', () => {
    test('Can mock createConnection', (done) => {
        mysql.createConnection.mockImplementation(() => mysql.createConnection(mockOptions));

    })
})
