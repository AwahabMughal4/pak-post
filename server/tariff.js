const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const port = 3001;

// Database configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tmp',
};

// Middleware to handle CORS
app.use(cors()); // Enable CORS for all routes

// Middleware to handle asynchronous code
app.use(async (req, res, next) => {
  try {
    // Create a MySQL connection pool
    const connection = await mysql.createConnection(dbConfig);

    // Execute the SQL query
    const [rows, fields] = await connection.execute(
      `
      SELECT
          sr.Title AS ServiceTitle,
          sc.Title AS ChargeTitle,
          scd.Charges AS ChargeAmount
      FROM
          service AS sr
      JOIN
          service_charges AS sc ON sc.Service_Id = sr.Service_Id
      JOIN
          service_charges_detail AS scd ON sc.Service_Charges_Id = scd.Service_Charges_Id
      `
    );

    // Release the database connection
    await connection.end();

    // Send the query results as JSON response
    res.json(rows);
  } catch (error) {
    console.error('Error executing SQL query:', error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
