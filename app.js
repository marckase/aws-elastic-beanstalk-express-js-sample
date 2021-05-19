const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!  Marc Kase is learning some more DevOps'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
