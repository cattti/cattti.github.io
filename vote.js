
// const express = require('express');
// const app = express();
// const port = 4000;

// app.use(express.static(__dirname));

// app.use(express.urlencoded({ extended: true }));

// app.post('/vote', (req, res) => {
//   const artist = req.body.artist;
//   const picture = req.body.picture;

//   res.send('Vote submitted successfully');
// });

// // http://localhost:4000/vote.html

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const express = require('express');
const fs = require('fs');
const app = express();
const port = 4000;

app.use(express.static(__dirname));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/vote', (req, res) => {
  const artist = req.body.artist;
  const picture = req.body.picture;

  
  let jsonData = [];
  try {
    const data = fs.readFileSync('data.json');
    jsonData = JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error);
  }


  jsonData.push({ artist, picture });

 
  try {
    fs.writeFileSync('data.json', JSON.stringify(jsonData, null, 2));
    console.log('Data written to data.json');
  } catch (error) {
    console.error('Error writing JSON file:', error);
  }

  res.send('Vote submitted successfully');
});

app.get('/statistics', (req, res) => {

  let jsonData = [];
  try {
    const data = fs.readFileSync('data.json');
    jsonData = JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error);
  }

 
  const artistCounts = {};
  const pictureCounts = {};
  jsonData.forEach((entry) => {
    const { artist, picture } = entry;
    artistCounts[artist] = (artistCounts[artist] || 0) + 1;
    pictureCounts[picture] = (pictureCounts[picture] || 0) + 1;
  });

  const statistics = {
    artistCounts,
    pictureCounts,
  };

  res.json(statistics);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
