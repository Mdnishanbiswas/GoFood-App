const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const mongoDB = require('./db');

mongoDB();

// Configure CORS
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

app.use(express.json());

app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/LoginUser"));
app.use('/api', require("./Routes/DisplayData"));

app.get('/', (req, res) => {
    res.send('Hello World!---');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
