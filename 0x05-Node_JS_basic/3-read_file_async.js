const fs = require('fs');

function countStudents(pathname) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathname, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        resolve(data);
        const lines = data.split('\n');
        const studentRows = lines.slice(1, -1);
        const totalStudents = studentRows.length;
        const studentsByField = {};

        studentRows.forEach((studentRow) => {
          const columns = studentRow.split(',');
          const field = columns[columns.length - 1];

          if (!studentsByField[field]) {
            studentsByField[field] = {};
            studentsByField[field].firstnames = [];
            studentsByField[field].count = 1;
          } else {
            studentsByField[field].count += 1;
          }
          studentsByField[field].firstnames.push(columns[0]);
        });

        console.log(`Number of students: ${totalStudents}`);

        for (const [field, info] of Object.entries(studentsByField)) {
          const firstnamesList = info.firstnames.join(', ');
          console.log(
            `Number of students in ${field}: ${info.count}. List: ${firstnamesList}`,
          );
        }
      }
    });
  });
}

module.exports = countStudents;
