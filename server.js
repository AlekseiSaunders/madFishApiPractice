const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 8000;

// base get handling for root

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
});

// Start server listening on PORT

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
