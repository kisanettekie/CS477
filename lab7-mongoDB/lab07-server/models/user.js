// let users = [];
const getDB = require('../utils/database').getDB;
class User {
    constructor(username, password, role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
    login() {
        //todo - NB - when we return an api from mongodb we get a promise
        return getDB().collection('users').fndOne({ username: this.username, password: this.password }); //promise
        // return users.find(u => u.username === this.username && u.password === this.password);

    }
}
const users = [new User('kisanet', 'admin123', 'admin'), new User('luwam', 'lalwal456', 'user')];

module.exports = User