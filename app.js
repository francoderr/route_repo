const express = require("express");
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World, This is the home router');
});

router.get('/profile', (req, res) => {
    res.send('Hello World, This is the profile router');
});

router.get('/login', (req, res) => {
    res.send("Hello World, This is the login router");
});

router.get('/logout', (req, res) => {
    res.send('Helo World, This is the logout router');
});

app.use('/', router);

app.listen(process.env.port || 8080);

console.log("web server is running");