const Users = require('./auth.controller');
module.exports = (router) => {
    // method get
    router.get('/', (req, res) => {
        res.send('Hello World!');
    });

    //method post
    router.post('/register', Users.createUser);
    router.post('/login', Users.loginUser);
}