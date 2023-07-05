import React from 'react';
import { Grid, Card, CardActionArea, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AlbumCard from './AlbumCard';
import useAlbums from '../hooks/useAlbums';

const AlbumOverview = () => {
  const albums = useAlbums();

  return (
    <>
      {(!albums || !albums.length) && <div>No albums found...</div>}
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
      <Card>
        <CardActionArea component={Link} to="/new">
          <Button variant="contained" color="primary">
            Add New Album
          </Button>
        </CardActionArea>
      </Card>
    </>
  );
};

export default AlbumOverview;
