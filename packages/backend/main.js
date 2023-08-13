const express = require('express');
const fileupload = require('express-fileupload');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(fileupload());
app.use(cors());

app.post('/upload', (req, res) => {
  if (req.files !== null) {
    const file = req.files.image;
    console.log(`${file.name} has uploaded.`);
    res.send(file.name);
  }
}  
)

app.listen(port, () => {
  console.log(`Uoload app listening on port ${port}.`);
});
