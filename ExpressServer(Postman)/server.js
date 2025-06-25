const express = require('express');
const app = express();
const PORT = 3000;

// Basic GET endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
