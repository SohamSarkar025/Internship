const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const logFilePath = path.join(__dirname, 'logs.txt');

// Check if logs.txt exists, create if not
if (!fs.existsSync(logFilePath)) {
    fs.writeFileSync(logFilePath, '', 'utf8');
    console.log('logs.txt created');
}

// Root route
app.get('/', (req, res) => {
    const currentTime = new Date().toLocaleString();
    const logLine = `App accessed at ${currentTime}\n`;

    // Append to file
    fs.appendFile(logFilePath, logLine, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Log appended');
        }
    });

    res.send('Welcome to the App. Log recorded.');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
