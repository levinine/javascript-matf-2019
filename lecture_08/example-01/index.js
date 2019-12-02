const express = require('express');

const app = express();
const port = 3000;

app.get('/hello', (request, response) => {
  response.send('/hello endpoint response!');
});

app.listen(port, () => console.log(`API is listening on port ${ port }`));
