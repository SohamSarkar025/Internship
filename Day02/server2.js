// c) Explain the difference between app.get() and app.post() with an example.

// app.get()
// Handles HTTP GET requests.
// Typically used to retrieve data from the server.
// Data is sent via the URL query string (e.g., ?name=Soham).

// app.post()
// Handles HTTP POST requests.
// Typically used to send data to the server (e.g., submitting a form).
// Data is sent in the request body, not the URL.

const express = require('express');
const app = express();
const port = 3000;

// Serve the login page
app.get('/login', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Login Page</title>
      </head>
      <body style="font-family: Arial; text-align: center; margin-top: 100px;">
        <h2>Login</h2>
        <form action="/login" method="POST">
          <input type="text" name="username" placeholder="Username" required/><br><br>
          <input type="password" name="password" placeholder="Password" required/><br><br>
          <button type="submit">Login</button>
        </form>
      </body>
    </html>
  `);
});

// Dummy POST handler (no real authentication logic yet)
app.post('/login', express.urlencoded({ extended: true }), (req, res) => {
  const { username, password } = req.body;
  res.send(`Login submitted! Username: ${username}, Password: ${password}`);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/login`);
});
