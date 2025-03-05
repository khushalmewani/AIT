// infoLogger.js

// Function to display information with a timestamp
const displayInfo = (message) => {
  try {
    // Check if the input message is a valid string
    if (typeof message !== 'string') {
      throw new Error('Invalid input: The message must be a string');
    }

    // Get the current date and time for the timestamp
    const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);

    // Log the message with the timestamp to the console
    console.log(`${timestamp} - Message: ${message}`);
  } catch (error) {
    // Handle any errors that occur in the function
    console.error(`Error in displayInfo: ${error.message}`);
  }
};

// Export the displayInfo function so it can be used in other files
module.exports = { displayInfo };
