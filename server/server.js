const express = require('express');
const cors = require('cors');
const xml2js = require('xml2js');
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "PakistanPostDB",
});

app.use(cors());
app.use(express.json());

app.get("/NDPostOffices", (req, res) => {
  const query = "SELECT * FROM NDPostOffices";

  db.query(query, (err, results) => {
    if (err) {
      res.status(3000).json({ error: "Database error" });
    } else {
      res.json(results);
    }
  });
});

app.get("/DPostOffices", (req, res) => {
  const query = "SELECT * FROM DPostOffices";

  db.query(query, (err, results) => {
    if (err) {
      res.status(3000).json({ error: "Database error" });
    } else {
      res.json(results);
    }
  });
});

app.post('/track', async (req, res) => {
    const articleId = req.body.articleId; // Get articleId from request body
    const resType = 'web'; // Replace with actual value
    
    try {
      const response = await fetch(
        `https://emtts.dakkhana.com.pk/MobileAppSOAP/EPTracklive.asmx/TrackArticle?ArticleId=${articleId}&ResType=${resType}`
      );
  
      const data = await response.text();
      xml2js.parseString(data, (err, result) => {
        if (err) {
          console.error("Error parsing XML:", err);
          return;
        }
      
        const trackData = result.TrackData;
        console.log(trackData);
        res.send(trackData);
        });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('An error occurred.');
    }
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
