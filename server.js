const express = require('express');
const { readFileSync } = require('fs');
const app = express();
const PORT = 8000;
const rappers = JSON.parse(readFileSync('./rappers.json'));

// basic json for responses.

// base get handling for root

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

// /api route for requests

app.get('/api/:rapperName', (request, response) => {
  let rapName = request.params.rapperName.toLowerCase();
  if (rappers[rapName]) {
    response.json(rappers[rapName]);
  } else {
    response.json(rappers['unknown']);
  }
});

// Start server listening on PORT

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
