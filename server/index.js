const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/data', (req, res) => {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
