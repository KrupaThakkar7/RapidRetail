const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors({
    origin : process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true // allows cookies to be sent with requests
}));

app.use(express.json());  //Parses JSON data from the request body and makes it available in req.body.
app.use(express.urlencoded({ extended: true }));  //It converts form data into a JavaScript object inside req.body.

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});