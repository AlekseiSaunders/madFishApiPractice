const express = require('express');
const { readFileSync } = require('fs');
const cors = require('cors');
const app = express();
const PORT = 8000;
const fishGenera = JSON.parse(readFileSync('./fish.json'));

// basic json for responses.

app.use(express.static('public'));
app.use(cors());

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
    response
      .status(404)
      .send(
        JSON.stringify(
          'There might be a spelling error in your input. No such genera found.'
        )
      );
  }
});

// Start server listening on PORT

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
