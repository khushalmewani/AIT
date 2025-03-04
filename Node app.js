// Import express module
var express = require('express');
var app = express();

// Use express.json() to parse JSON data from POST requests
app.use(express.urlencoded({ extended: true }));

// Serve the registration form at the root route "/"
app.get('/', (req, res) => {
    res.send(`
        <form action="/userinfo" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Handle user information on form submission via POST request
app.post('/userinfo', (req, res) => {
    const { name, email, age } = req.body;
    res.send(`
        <h1>User Information</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Age: ${age}</p>
        <a href="/course">Select Courses</a>
    `);
});

// Course selection route
app.get('/course', (req, res) => {
    res.send(`
        <h1>Select a Course</h1>
        <form action="/course" method="POST">
            <label for="course">Choose a course:</label>
            <select name="course" id="course">
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
            </select><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Handle course selection POST request
app.post('/course', (req, res) => {
    const { course } = req.body;
    res.send(`<h1>You selected: ${course}</h1>`);
});

// Handle any other routes with a 404 Not Found message
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1><p>The requested URL was not found on this server.</p>');
});

    // Start the express server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
