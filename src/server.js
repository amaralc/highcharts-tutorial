const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static('public'))

app.listen(3333);

console.log('Server has started on port 3333')