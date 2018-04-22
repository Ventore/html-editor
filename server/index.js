const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, './client/dist')));

const PORT = process.env.PORT || 8080;
http.createServer(app).listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
