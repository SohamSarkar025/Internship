// Import MongoClient and ObjectId from the MongoDB driver
const { MongoClient, ObjectId } = require('mongodb');

// Define the MongoDB URI with authentication and admin database
const uri = 'mongodb://soham:soham123@localhost:27017/admin';

// Create a new MongoClient instance using the URI
const client = new MongoClient(uri);

// Define the name of the database to use
const dbName = 'school';

// Function to insert a new student into the "students" collection
async function createStudent(student) {
    try {
        // Connect to MongoDB
        await client.connect();

        // Get a reference to the "school" database
        const db = client.db(dbName);

        // Insert the student document into the "students" collection
        const result = await db.collection('students').insertOne(student);

        // Print success message with inserted ID
        console.log('Student inserted with ID:', result.insertedId);
    } catch (err) {
        // Print error message if something goes wrong
        console.error('Error inserting student:', err);
    } 
}

// Function to retrieve all students from the "students" collection
async function getStudents() {
    try {
        // Connect to MongoDB
        await client.connect();

        // Get a reference to the "school" database
        const db = client.db(dbName);

        // Find all documents in the "students" collection and convert to array
        const students = await db.collection('students').find().toArray();

        // Print the list of students
        console.log('All Students:', students);
    } catch (err) {
        // Print error message if something goes wrong
        console.error('Error retrieving students:', err);
    } 
}

// Function to update a student document by its ID
async function updateStudent(id, updates) {
    try {
        // Connect to MongoDB
        await client.connect();

        // Get a reference to the "school" database
        const db = client.db(dbName);

        // Update the student document with the given ID using $set operator
        const result = await db.collection('students').updateOne(
            { _id: new ObjectId(id) },  // Match by ObjectId
            { $set: updates }           // Apply updates
        );

        // Print success message if document was modified
        console.log('Student updated:', result.modifiedCount > 0);
    } catch (err) {
        // Print error message if something goes wrong
        console.error('Error updating student:', err);
    } 
}

// Function to delete a student document by its ID
async function deleteStudent(id) {
    try {
        // Connect to MongoDB
        await client.connect();

        // Get a reference to the "school" database
        const db = client.db(dbName);

        // Delete the student document with the given ID
        const result = await db.collection('students').deleteOne({ _id: new ObjectId(id) });

        // Print success message if document was deleted
        console.log('Student deleted:', result.deletedCount > 0);
    } catch (err) {
        // Print error message if something goes wrong
        console.error('error deleting student:', err);
    }
}

// Example function calls.

// Call createStudent() to insert a new student document
// createStudent({ name: 'Alice', email: 'alice@example.com', age: 21, course: 'Math' });

// Call getStudents() to retrieve and display all student documents
// getStudents();

// Call updateStudent() with an ID and updated fields
// updateStudent('685aebf53c9c7411e95aa0d8', { age: 22 });

// Call deleteStudent() with an ID to remove a student document
// deleteStudent('685aebf53c9c7411e95aa0d8');
