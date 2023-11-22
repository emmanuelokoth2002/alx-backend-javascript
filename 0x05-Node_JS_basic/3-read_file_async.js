const fs = require('fs');

function countStudents(pathname) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathname, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(Boolean);

      const fields = {};

      lines.forEach(line => {
        const [firstname, lastname, age, field] = line.split(',');

        if (fields[field]) {
          fields[field].count += 1;
          fields[field].list.push(firstname);
        } else {
          fields[field] = {
            count: 1,
            list: [firstname],
          };
        }
      });

      const totalStudents = lines.length;

      console.log(`Number of students: ${totalStudents}`);

      Object.entries(fields).forEach(([field, info]) => {
        console.log(`Number of students in ${field}: ${info.count}. List: ${info.list.join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
