const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 8000;

// basic json for responses.

const rappers = {
  '21 savage': {
    birthName: 'Sheyaa Bin Abraham-Joseph',
    birthLocation: 'London, England',
    age: 29,
  },
  'chance the rapper': {
    birthname: 'Chancelor Bennett',
    birthLocation: 'Chicago, Illinois',
    age: 29,
  },
  unknown: {
    birthName: 'unknown',
    birthLocation: 'unknown',
    age: 0,
  },
};

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
