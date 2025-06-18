/*
a) Create a basic Express server with three routes:
/ (Home route)
/about (About route)
/contact (Contact route)
*/
const express = require('express');
const app = express();
const port = 3001;

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

// Contact route
app.get('/contact', (req, res) => {
  res.send('Contact us at: contact@example.com');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/*b) How do you handle 404 (Not Found) routes in Express? Demonstrate with code.*/
// 404 handler (must be last)
app.use((req, res) => {
  res.status(404).send('404 Not Found: The page you are looking for does not exist. Love From Soham Sarkar');
});




