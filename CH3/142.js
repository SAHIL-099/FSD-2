// Write a Node.js script to create a class student by assigning name & result in form 
// of members. Create one member function named as topper of X which returns 
// topper student object. Details of this topper student should be printed on file as 
// well as on console.

const fs = require('fs');
// source chat gpt see 143 for simeple version only names are changed
class Student {
  constructor(name, result) {
    this.name = name;
    this.result = result;
  }

  static topper(students) {
    if (students.length === 0) {
      return null;
    }

    let topperStudent = students[0];
    for (let student of students) {
      if (student.result > topperStudent.result) {
        topperStudent = student;
      }
    }
    return topperStudent;
  }
}

// Function to write the topper student details to a file
function writeTopperToFile(topperStudent, callback) {
  const content = `Topper Student:\nName: ${topperStudent.name}\nResult: ${topperStudent.result}\n`;
  fs.writeFile('files/topper.txt', content, 'utf8', (err) => {
    if (err) {
      return callback(err);
    }
    callback(null, 'Topper student details written to file');
  });
}

// Create student objects
const students = [
  new Student('Alice', 85),
  new Student('Bob', 90),
  new Student('Charlie', 87),
  new Student('Daisy', 92)
];

// Find the topper student
const topperStudent = Student.topper(students);

// Print topper student details to console and write to file
if (topperStudent) {
  console.log('Topper Student:', topperStudent);
  writeTopperToFile(topperStudent, (err, message) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(message);
    }
  });
} else {
  console.log('No students found.');
}
