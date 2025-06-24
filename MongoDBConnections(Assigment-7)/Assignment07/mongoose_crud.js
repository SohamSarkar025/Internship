// Import mongoose library to interact with MongoDB using Mongoose ORM
const mongoose = require('mongoose');

// Connect to MongoDB using Mongoose with a plain connection URI
// This connects to a local MongoDB database named "school"
// connection to MongoDB Atlas
mongoose.connect('mongodb+srv://soham123:soham123@cluster0.9jnaofk.mongodb.net/school')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

// Define a schema for the "students" collection
// Fields: name, email, age, course
const studentSchema = new mongoose.Schema({
    name: String,     // Student's name
    email: String,    // Student's email address
    age: Number,      // Student's age
    course: String    // Course the student is enrolled in
});

// Create a model from the schema (used to interact with the collection)
const Student = mongoose.model('Student', studentSchema);

// Function to create a new student document
async function createStudent(data) {
    try {
        const student = new Student(data);       // Create a new Student instance with provided data
        const saved = await student.save();      // Save the student document to the database
        console.log('Student saved:', saved); // Log the saved student object
    } catch (err) {
        console.error('Error:', err);         // Log any error that occurs
    }
}

// Function to retrieve all student documents
async function getStudents() {
    try {
        const students = await Student.find();       // Fetch all documents in the "students" collection
        console.log('All Students:', students);   // Log the array of students
    } catch (err) {
        console.error('Error:', err);             // Log any error that occurs
    }
}

// Function to update a student document by its ID
async function updateStudent(id, updates) {
    try {
        // Find the student by ID and apply the updates; return the updated document
        const updated = await Student.findByIdAndUpdate(id, updates, { new: true });

        if (updated) {
            console.log('Student updated:', updated); // Log the updated document
        } else {
            console.log('No student found');          // Inform if the student wasn't found
        }
    } catch (err) {
        console.error('Error:', err);                 // Log any error that occurs
    }
}

// Function to delete a student document by its ID
async function deleteStudent(id) {
    try {
        // Find the student by ID and delete it
        const deleted = await Student.findByIdAndDelete(id);

        if (deleted) {
            console.log('Student deleted:', deleted); // Log the deleted document
        } else {
            console.log('No student found');           // Inform if no matching document was found
        }
    } catch (err) {
        console.error('Error:', err);                 // Log any error that occurs
    }
}

// Example calls — Uncomment only one at a time to test each operation

// createStudent({ name: 'Anu', email: 'anu@example.com', age: 22, course: 'CS' }); // Insert a new student

// getStudents(); // Retrieve and display all students

// updateStudent('685af3b6bcb30547b998b11e', { age: 23 }); // Update student age (replace with real ID)

// deleteStudent('685af3b6bcb30547b998b11e'); // Delete student by ID (replace with real ID)
