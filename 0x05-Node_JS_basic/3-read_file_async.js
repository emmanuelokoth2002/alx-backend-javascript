const fs = require('fs');

function countStudents(pathname) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathname, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(Boolean); // Remove empty lines

      const students = lines.map(line => {
        const [firstname, lastname, age, field] = line.split(',');
        return { firstname, lastname, age, field };
      });

      const totalStudents = students.length;

      console.log(`Number of students: ${totalStudents}`);

      const fields = {};

      students.forEach(student => {
        if (fields[student.field]) {
          fields[student.field].count += 1;
          fields[student.field].list.push(student.firstname);
        } else {
          fields[student.field] = {
            count: 1,
            list: [student.firstname],
          };
        }
      });

      Object.entries(fields).forEach(([field, info]) => {
        console.log(`Number of students in ${field}: ${info.count}. List: ${info.list.join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
