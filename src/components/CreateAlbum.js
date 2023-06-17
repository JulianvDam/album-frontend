import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AlbumForm from './AlbumForm';

const CreateAlbum = () => {
  const navigate = useNavigate();

  const handleSubmit = (newAlbum) => {
    console.log(newAlbum);
    const request = fetch('/api/albums', {
      method: 'POST',
      body: JSON.stringify(newAlbum),
      headers: { 'Content-Type': 'application/json' },
    });

    request.then((response) => {
      if (!response.ok) {
        console.error(response.statusText);
      } else {
        navigate('/');
      }
    });
  };

  return (
    <div>
      <Link to="/">Back to Overview</Link>
      <AlbumForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateAlbum;
