const express = require('express');
const { readFileSync } = require('fs');
const app = express();
const PORT = 8000;
const fishGenera = JSON.parse(readFileSync('./fish.json'));

// basic json for responses.

app.use(express.static('public'));

// base get handling for root

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

// /api route for requests

app.get('/api/:fishG', (request, response) => {
  let fishG = request.params.fishG.toLowerCase();
  if (fishGenera[fishG]) {
    response.json(fishGenera[fishG]);
  } else {
    response.json(fishGenera['unknown']);
  }
});

// Start server listening on PORT

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
