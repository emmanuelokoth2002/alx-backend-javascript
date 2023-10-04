interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement("table");

// Create the table header row
const headerRow = table.insertRow(0);
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);
headerCell1.textContent = "First Name";
headerCell2.textContent = "Location";

// Create table rows for each student
studentsList.forEach((student, index) => {
  const row = table.insertRow(index + 1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append the table to the document body or any other desired element
document.body.appendChild(table);
