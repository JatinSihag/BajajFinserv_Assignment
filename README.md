BFHL API - Data Transformation Service
This is a simple Node.js REST API designed to process and categorize various data types as part of the BFHL (Backend Frontend Handling Logic) challenge. It handles numbers, alphabets, and special characters, performing specific transformations and calculations.

How to Run Locally
To get this API up and running on your local machine, follow these steps:

Install Dependencies:
Open your terminal or command prompt, navigate to the project directory, and run the following command to install all necessary Node.js packages:

npm install

Start the Server:
Once the dependencies are installed, you can start the API server by executing:

npm start

The server will typically start on port 3000. You'll see a message in your console indicating that the server is running successfully, along with the URL to access it.

Access the API:
The API endpoint for processing data will be available at:
http://localhost:3000/bfhl

Example API Usage
This API accepts POST requests to the /bfhl endpoint with a JSON body containing a data array.

Example Request
Here's an example of a request body you can send to the API.
Notice how various data types (alphabets, numbers, and special characters) are included in the data array.

{
  "data": ["a","1","334","4","R", "$"]
}

Postman Screenshot of Example Request:
![alt text](<Screenshot 2025-07-29 201607-1.png>)

Example Response
Upon successfully processing the request, the API will return a JSON object categorizing the input, providing personal identification details, and displaying transformed data.

{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}

Postman Screenshot of Example Response:
![alt text](<Screenshot 2025-07-29 201534.png>)

Deployment
This API can be easily deployed to popular cloud platforms such as Vercel, Railway, or Render.

Vercel Specifics: If deploying to Vercel, you might need to add a vercel.json configuration file. Ensure your build command is set to npm install (or npm install && npm run build if you have a build step) and specify the output directory, usually /.

Important Note: Remember to update the USER_FULL_NAME, USER_DATE_OF_BIRTH, USER_EMAIL, and USER_ROLL_NUMBER constants in your index.js file with your actual details as required by the BFHL challenge.