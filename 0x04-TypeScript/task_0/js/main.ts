// Define the interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}


// Create two student objects
const student1: Student = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 25,
  location: 'Lagos',
};


const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  location: 'London',
};


// Store them in an array
const studentsList: Student[] = [student1, student2];
