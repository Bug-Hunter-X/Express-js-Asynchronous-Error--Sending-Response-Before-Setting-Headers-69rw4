const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    // Simulate an asynchronous operation
    await new Promise(resolve => setTimeout(resolve, 1000));
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello World!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});