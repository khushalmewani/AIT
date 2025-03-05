// app.js

// Import the custom infoLogger module
const { displayInfo } = require('./infoLogger');

// Use the displayInfo function to log messages
displayInfo('Hello, World!');
displayInfo('This is a test message');
displayInfo(123);  // This will trigger an error because the input is not a string
