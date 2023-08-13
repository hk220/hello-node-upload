import React, { useState } from 'react';
import axios from 'axios';

function Send() {
  const [images, setImages] = useState<FileList | null>(null);
  const [data, setData] = useState(null);

  const handleSubmit = () => {
    const data = new FormData();
    console.log(images)
    if (!images) return;
    for (let image of images) {
      data.append('images', image);
    }
    axios.post('http://localhost:3001/upload/', data, 
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    }).then(response => {
      console.log(response.data);
      setData(response.data);
    });
  }

  return (
    <>
      <p>ファイル送信</p>
      <input accept="image/*" multiple type="file" onChange={event => setImages(event.target.files)} />
      <button onClick={handleSubmit}>送信</button>
      {data ? (<p>{data}</p>) : null}
    </>
  )
}

export default Send;
