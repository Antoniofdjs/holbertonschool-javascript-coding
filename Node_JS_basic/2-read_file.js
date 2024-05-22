const fs = require('fs');

const countStudents = (path) => {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  const totalStudents = lines.length - 1;
  const students = lines.map((line) => line.split(','));

  students.shift(); // remove headers
  const fieldsAndStudents = {};

  for (const student of students) {
    const studentName = student[0];
    const field = student[3].replace('\r', '');
    // Create field(if not exist) and append names as a list
    if (fieldsAndStudents[`${field}`]) {
      fieldsAndStudents[`${field}`].push(studentName);
    } else {
      fieldsAndStudents[`${field}`] = [studentName];
    }
  }
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, names] of Object.entries(fieldsAndStudents)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
};
module.exports = countStudents;
