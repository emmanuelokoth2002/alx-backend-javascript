const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(Boolean); // Remove empty lines

      const students = lines.map(line => {
        const [firstname, lastname, age, field] = line.split(',');
        return { firstname, lastname, age, field };
      });

      const fields = {};

      students.forEach(student => {
        if (fields[student.field]) {
          fields[student.field].push(student.firstname);
        } else {
          fields[student.field] = [student.firstname];
        }
      });

      resolve(fields);
    });
  });
}

module.exports = { readDatabase };
