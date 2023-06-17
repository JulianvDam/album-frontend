import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function useAlbum(albumId) {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    fetch(`/api/albums/${albumId}`)
      .then(response => response.json())
      .then(data => setAlbum(data))
      .catch(error => {
        console.error('Error fetching album:', error);
        setAlbum(null);
      });
  }, [albumId]);

  return album;
}

function AlbumDetail() {
  const { id } = useParams();
  const album = useAlbum(id);

  if (!album) {
    return <div>Loading album...</div>;
  }

  return (
    <div>
      <h2>Album Detail Page</h2>
      <Link to="/">Back to Overview</Link>
      {/* Display album details */}
      <h3>{album.name}</h3>
      <p>Artist: {album.artist}</p>
      <img src={album.imageUrl} alt={album.name} />
    </div>
  );
}

export default AlbumDetail;
