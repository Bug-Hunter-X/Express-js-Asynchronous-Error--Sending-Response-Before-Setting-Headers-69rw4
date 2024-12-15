const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This is where the error occurs, trying to use res.send before setting headers
  res.send('Hello World');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});