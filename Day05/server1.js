const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files (e.g. CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS
app.use(cors());

// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// GET route to render form
app.get("/", (req, res) => {
    res.render('bmi'); // will show empty form initially
});

// POST route to calculate BMI
app.post("/bmi", (req, res) => {
    const w = parseFloat(req.body.weight);
    const h = parseFloat(req.body.height) / 100; // convert cm to meters

    if (!w || w <= 0 || !h || h <= 0) {
        return res.send("Please enter valid values!");
    }

    const bmi = w / (h * h);
    let message = "";

    if (bmi < 18.5) {
        message = "Underweight!";
    } else if (bmi < 25) {
        message = "Normal!";
    } else if (bmi < 30) {
        message = "Overweight!";
    } else {
        message = "Obese!";
    }

    res.render("bmi", {
        your_bmi: bmi.toFixed(2),
        message: message
    });
});

// Start server
app.listen(8900, () => {
    console.log("Server running at http://localhost:8900");
});
