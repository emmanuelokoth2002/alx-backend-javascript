const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

// Middleware to parse the request body as JSON
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFileName = process.argv[2];

  if (!databaseFileName) {
    res.status(500).send('Internal Server Error: Database file not provided.');
    return;
  }

  fs.readFile(databaseFileName, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error: Unable to read database file.');
      return;
    }

    const lines = data.trim().split('\n');
    const students = [];
    let csCount = 0;
    let sweCount = 0;

    for (const line of lines) {
      const [name, age, field] = line.split(',');

      if (name && age && field) {
        students.push({ name, age, field });

        if (field === 'CS') {
          csCount++;
        } else if (field === 'SWE') {
          sweCount++;
        }
      }
    }

    let response = 'This is the list of our students\n';
    response += `Number of students: ${students.length}\n`;
    response += `Number of students in CS: ${csCount}. List: ${students
      .filter((student) => student.field === 'CS')
      .map((student) => student.name)
      .join(', ')}\n`;
    response += `Number of students in SWE: ${sweCount}. List: ${students
      .filter((student) => student.field === 'SWE')
      .map((student) => student.name)
      .join(', ')}\n`;

    res.send(response);
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
