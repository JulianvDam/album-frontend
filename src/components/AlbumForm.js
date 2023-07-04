import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Card, CardContent, TextField, Button } from '@material-ui/core';

const AlbumForm = ({ album, onSubmit, onRemove }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: album
      ? {
        name: album.name || '',
        artist: album.artist || '',
        imageURL: album.imageURL || '',
      }
      : {
        name: '',
        artist: '',
        imageURL: '',
      },
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  const handleFormDelete = (data) => {
    onRemove(data);
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Name"
                variant="outlined"
                {...field}
                margin="normal"
                fullWidth
              />
            )}
          />
          <Controller
            name="artist"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Artist"
                variant="outlined"
                {...field}
                margin="normal"
                fullWidth
              />
            )}
          />
          <Controller
            name="imageURL"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Image URL"
                variant="outlined"
                {...field}
                margin="normal"
                fullWidth
              />
            )}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
        {onRemove && (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleFormDelete}
            style={{ marginLeft: '8px' }}
          >
            Delete album
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default AlbumForm;
