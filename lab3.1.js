// Import the axios library
// const axios = require('axios');

// // Using the axios.get method to make a GET request to the specified URL.
// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//  // If the request is successful, the `.then` block is executed.
//  .then(response => {
//   // The response object contains the data returned from the server.
//   // We log the `data` property of the response to the console.
//   console.log(response.data);
//  })
//  // If there is an error during the request, the `.catch` block is executed.
//  .catch(error => {
//   // We log an error message to the console along with the error object.
//   console.error('Error fetching data:', error);
//  });

 // Import the axios library.
// const axios = require('axios');

// // Data to be sent in the POST request.
// const data = {
//  name: 'John Doe',
//  age: 30
// };

// // Using the axios.post method to make a POST request
// axios.post('https://api.example.com/users', data)
//  .then(response => {
//   console.log('User created:', response.data);
//  })
//  .catch(error => {
//   console.error('Error creating user:', error);
//  });

// const axios = require('axios');

// // Asynchronous function to post data to an API
// async function postData() {
//  try {
//   // Await the response from the Axios POST request
//   let response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
//    title: 'foo',
//    body: 'bar',
//    userId: 1
//   });

//   // Log the response data to the console
//   console.log(response.data);
//  } catch (error) {
//   // If there is an error, log the error message
//   console.error('Error posting data:', error);
//  }
// }

// // Call the async function
// postData();