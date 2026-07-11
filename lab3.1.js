// Import the axios library
const axios = require('axios');

// Using the axios.get method to make a GET request to the specified URL.
axios.get('https://jsonplaceholder.typicode.com/posts/1')
 // If the request is successful, the `.then` block is executed.
 .then(response => {
  // The response object contains the data returned from the server.
  // We log the `data` property of the response to the console.
  console.log(response.data);
 })
 // If there is an error during the request, the `.catch` block is executed.
 .catch(error => {
  // We log an error message to the console along with the error object.
  console.error('Error fetching data:', error);
 });