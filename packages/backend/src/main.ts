import express from 'express';
import fileupload, { UploadedFile } from 'express-fileupload';
import cors from 'cors';
const app = express();
const port = 3001;

app.use(fileupload());
app.use(cors());

app.post('/upload', (req, res) => {
  if (req.files) {
    const files = Array.isArray(req.files.images) ? req.files.images : [req.files.images];
    const filenames = Array<string>();
    files.forEach(f => {
      console.log(f.name);
      filenames.push(f.name);
    });
    res.send(filenames);
  }
}
)

app.listen(port, () => {
  console.log(`Upload app listening on port ${port}.`);
});
