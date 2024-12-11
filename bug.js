const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
//Error:This code will work fine if the port is available.But if the port is already in use,the server will fail to start and you will not get any error message in the console.
//Solution: Use a try...catch block to handle the error