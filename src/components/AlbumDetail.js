import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useAlbum from '../hooks/useAlbum';
import AlbumForm from './AlbumForm';

const AlbumDetail = () => {
  const { albumId } = useParams();
  const album = useAlbum(albumId);
  const navigate = useNavigate();

  const removeAlbum = () => {
    fetch(`${process.env.REACT_APP_API_BASE}/api/album/${albumId}`, { method: 'DELETE' })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete album');
        }
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  };


  const editAlbum = () => {
    fetch(`${process.env.REACT_APP_API_BASE}/api/album/${albumId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedAlbum),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update album');
        }
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
      <div>Edit Album:</div>
      <AlbumForm album={album} onSubmit={editAlbum} onRemove={removeAlbum} />
    </div>
  );
};

export default AlbumDetail;
