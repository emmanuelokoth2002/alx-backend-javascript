const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const fields = await readDatabase(req.app.locals.database);
      res.status(200).send('This is the list of our students\n');
      Object.entries(fields).forEach(([field, firstnames]) => {
        res.write(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}\n`);
      });
      res.end();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const fields = await readDatabase(req.app.locals.database);
      const firstnames = fields[major] || [];
      res.status(200).send(`List: ${firstnames.join(', ')}\n`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = StudentsController;
