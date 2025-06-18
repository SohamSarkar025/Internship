const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware to parse form data (URL-encoded)
app.use(express.urlencoded({ extended: true }));

// GET route to serve HTML contact form
app.get('/contact', (req, res) => {
    res.send(`
        <h2>Contact Me</h2>
        <form action="/contact" method="POST">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>

            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="5" required></textarea><br><br>

            <button type="submit">Send</button>
        </form>
    `);
});

// POST /contact route
app.post('/contact', async (req, res) => {
    const { name, message } = req.body;

    if (!name || !message) {
        return res.status(400).send('Name and message are required');
    }

    console.log(`Contact Form Received:\nName: ${name}\nMessage: ${message}`);

    // Nodemailer setup (credentials hardcoded)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sohamsarkarofficial000@gmail.com', 
            pass: 'rhoa ovpf shel kkbm'     
        }
    });

    const mailOptions = {
        from: 'sohamsarkarofficial000@gmail.com',
        to: 'sohamsarkarofficial000@gmail.com',
        subject: 'New Contact Message from Portfolio',
        text: `Name: ${name}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send('Email sent successfully!');
    } catch (error) {
        console.error('Email sending failed:', error);
        res.status(500).send('Failed to send email.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
