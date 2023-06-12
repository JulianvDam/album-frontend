import React from 'react';
import { Grid } from '@material-ui/core';
import AlbumCard from './AlbumCard';
import useAlbums from "../hooks/useAlbums";


function AlbumOverview() {
    const albums = useAlbums();
  
    if (!albums.length) {
      return <div>Loading albums...</div>;
    }
  
    return (
      <div>
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            id={album.id}
            name={album.name}
            artist={album.artist}
            imageUrl={album.imageUrl}
          />
        ))}
      </div>
    );
  }
  
  export default AlbumOverview;
  