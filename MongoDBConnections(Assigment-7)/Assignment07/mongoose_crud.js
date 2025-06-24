// mongoose_crud.js

const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/school'; // or your MongoDB Atlas URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB using Mongoose'))
    .catch(err => console.error('Mongoose connection error:', err));

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    course: String
});

const Student = mongoose.model('Student', studentSchema);

async function createStudent(student) {
    try {
        const newStudent = new Student(student);
        await newStudent.save();
        console.log('Student created:', newStudent);
    } catch (err) {
        console.error('Error creating student:', err);
    }
}

async function getStudents() {
    try {
        const students = await Student.find();
        console.log('All Students:', students);
    } catch (err) {
        console.error('Error fetching students:', err);
    }
}

async function updateStudent(id, updates) {
    try {
        const updated = await Student.findByIdAndUpdate(id, updates, { new: true });
        console.log('Student updated:', updated);
    } catch (err) {
        console.error('Error updating student:', err);
    }
}

async function deleteStudent(id) {
    try {
        const deleted = await Student.findByIdAndDelete(id);
        console.log('Student deleted:', deleted);
    } catch (err) {
        console.error('Error deleting student:', err);
    }
}

// Example usage
// Uncomment to test each function one by one
// createStudent({ name: 'Bob', email: 'bob@example.com', age: 23, course: 'Science' });
// getStudents();
// updateStudent('PUT_AN_EXISTING_ID_HERE', { age: 25 });
// deleteStudent('PUT_AN_EXISTING_ID_HERE');
