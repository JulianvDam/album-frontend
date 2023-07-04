import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAlbum from '../hooks/useAlbum';
import AlbumForm from './AlbumForm';

const AlbumDetail = () => {
  const path = window.location.pathname;
  const albumId = path.substring(path.lastIndexOf('/') + 1);
  const album = useAlbum(albumId);
  const navigate = useNavigate();

  const removeAlbum = async (albumId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE}/api/album/${albumId}`, {
        method: 'DELETE',
        body: JSON.stringify(albumId),
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

  const editAlbum = async (data) => {
    try {
      const requestBody = {
        item1: albumId,
        item2: JSON.stringify(data)
      };

      const response = await fetch(`${process.env.REACT_APP_API_BASE}/api/album/${albumId}`, {
        method: 'PUT',
        body: JSON.stringify(requestBody),
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

  if (!album) {
    return <div>No album found...</div>;
  }

  return (
    <div>
      <Link to="/">Back to Overview</Link>
      <div>Edit Album:</div>
      <AlbumForm album={album} onSubmit={editAlbum} onRemove={() => removeAlbum(albumId)} />
    </div>
  );
};

export default AlbumDetail;
