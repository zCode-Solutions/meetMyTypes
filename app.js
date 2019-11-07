const express = require('express');
const hello = require('./hello');
const app = express();
const port = 3000


app.get('/', hello ) //says hello

app.listen(port, () => console.log(`Example app listening on port ${port}!`))