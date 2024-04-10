const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());

// Load routes
app.use('/app', routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
