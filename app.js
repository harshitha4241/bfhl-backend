// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Route: /bfhl | Method: POST
app.post('/bfhl', (req, res) => {
  const { email, rollNumber, numbers, alphabets } = req.body;
  const userId = 'john_doe_17091999'; // hardcoded for demo purposes
  const isSuccess = true; // hardcoded for demo purposes

  const response = {
    status: 'success',
    user_id: harshithakavya_04022004,
    college_email_id: harshithakavya_g@srmap.edu.in,
    college_roll_number: AP21110010806,
    numbers: numbers,
    alphabets: alphabets,
    is_success: isSuccess,
  };

  res.json(response);
});

// Route: /bfhl | Method: GET
app.get('/bfhl', (req, res) => {
  const operationCode = 1; // hardcoded for demo purposes
  const responseBody = {
    operation_code: operationCode,
  };

  res.status(200).json(responseBody);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
