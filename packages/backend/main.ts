import express from 'express';
import fileupload, { UploadedFile } from 'express-fileupload';
import cors from 'cors';
const app = express();
const port = 3001;

app.use(fileupload());
app.use(cors());

function handleSingleFile(file: UploadedFile, res: express.Response) {
  console.log(file.name);
  res.send(file.name);
}

app.post('/upload', (req, res) => {
  if (req.files) {
    const file = req.files.image;
    if (Array.isArray(file)) {
      file.forEach(f => handleSingleFile(f, res))
    } else {
      handleSingleFile(file, res);
    }
  }
}  
)

app.listen(port, () => {
  console.log(`Uoload app listening on port ${port}.`);
});
