const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/track', async (req, res) => {
    const articleId = req.query.articleId; // Replace with actual value
    const resType = "Android"; // Replace with actual value
    
    try {
      const response = await fetch(
        `https://emtts.dakkhana.com.pk/MobileAppSOAP/EPTracklive.asmx/TrackArticle?ArticleId=${articleId}&ResType=${resType}`
      );
  
      const data = await response.text();
      res.send(data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("An error occurred.");
    }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
