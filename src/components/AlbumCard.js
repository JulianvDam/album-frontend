import React from 'react';
import { Card, CardHeader, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';

const AlbumCard = ({ id, name, artist, imageUrl }) => {
  return (
    <Card>
      <Link to={`/albums/${id}`} style={{ textDecoration: 'none' }}>
        <CardHeader title={name} subheader={artist} />
        <CardMedia component="img" alt={name} height="200" image={imageUrl} />
      </Link>
    </Card>
  );
};

export default AlbumCard;
