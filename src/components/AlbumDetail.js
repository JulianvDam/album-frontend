import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useAlbum from '../hooks/useAlbum';
import AlbumForm from './AlbumForm';

const AlbumDetail = () => {
  const { albumId } = useParams();
  const album = useAlbum(albumId);
  const navigate = useNavigate();

  const removeAlbum = () => {
    fetch(`/api/albums/${albumId}`, { method: 'DELETE' })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete album');
        }
        // Handle successful deletion
        // Redirect to the album overview page
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  };

  if (!album) {
    return <div>No album found...</div>;
  }

  return (
    <div>
      <Link to="/">Back to Overview</Link>
      <AlbumForm album={album} onRemove={removeAlbum} />
    </div>
  );
};

export default AlbumDetail;
