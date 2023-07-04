import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AlbumForm from './AlbumForm';

const CreateAlbum = () => {
  const navigate = useNavigate();

  const handleSubmit = async (newAlbum) => {
    try {
      const response = await fetch('http://alb-album-1900935504.us-east-1.elb.amazonaws.com/api/album/api/album', {
        method: 'POST',
        body: JSON.stringify(newAlbum),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        console.error(response.statusText);
        return;
      }

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Link to="/">Back to Overview</Link>
      <AlbumForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateAlbum;
