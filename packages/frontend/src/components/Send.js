import React, { useState } from 'react';
import axios from 'axios';

function Send() {
  const [images, setImages] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    const data = new FormData();
    console.log(images)
    for (let i = 0; i < images.length; i++) {
      data.append('images', images[i]);
    }
    axios.post('http://localhost:3001/upload/', data, 
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    }).then(response => {
      setMessage(response.data);
      console.log(response.data);
    });
  }

  return (
    <>
      <p>ファイル送信</p>
      <input accept="image/*" multiple type="file" onChange={event => setImages(event.target.files)} />
      <button onClick={handleSubmit}>送信</button>
      {message ? (<p>{message}</p>) : null}
    </>
  )
}

export default Send;
