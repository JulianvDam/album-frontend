import React from 'react';
import { Grid } from '@material-ui/core';
import AlbumCard from './AlbumCard';
import useAlbums from "../hooks/useAlbums";

export const AlbumOverview = ({ albums }) => {
  if (!albums || !albums.length) {
    return <div>Loading albums...</div>;
  }

  return (
    <Grid container spacing={2}>
      {albums.map((album) => (
        <Grid item xs={12} sm={6} md={4} key={album.id}>
          <AlbumCard
            id={album.id}
            name={album.name}
            artist={album.artist}
            imageUrl={album.imageUrl}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export const AlbumOverviewWrapper = () => {
  const albums = useAlbums();

  return <AlbumOverview albums={albums} />;
};

export default AlbumOverview;
