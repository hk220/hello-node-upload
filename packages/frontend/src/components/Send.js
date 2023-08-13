import React, { useState } from 'react';
import axios from 'axios';

function Send() {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    const data = new FormData();
    data.append('image', image);
    console.log(image);
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
      <input accept="image/*" type="file" onChange={event => setImage(event.target.files[0])} />
      <button onClick={handleSubmit}>送信</button>
      {message ? (<p>{message}</p>) : null}
    </>
  )
}

export default Send;
