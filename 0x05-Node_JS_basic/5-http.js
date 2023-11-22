const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');	  
    res.end();
  } else if (req.url === '/students') {
    const databaseFile = process.argv[2];

    countStudents(databaseFile)
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.end('Not Found\n');
  }
});

app.listen(1245);

module.exports = app;
