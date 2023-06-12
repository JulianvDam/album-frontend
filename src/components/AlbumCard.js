import React from 'react';
import { Card, CardHeader, CardMedia } from '@material-ui/core';

const AlbumCard = ({ id, name, artist, imageUrl }) => {
    return (
        <Card>
            <CardHeader title={name} subheader={artist} />
            <CardMedia component="img" alt={name} height="200" image={imageUrl} />
        </Card>
    );
};

export default AlbumCard;
