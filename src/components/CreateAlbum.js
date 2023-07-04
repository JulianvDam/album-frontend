import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AlbumForm from './AlbumForm';

const CreateAlbum = () => {
  const navigate = useNavigate();

  // const handleSubmit = (newAlbum) => {
  //   console.log(newAlbum);
  //   const request = fetch('/api/albums', {
  //     method: 'POST',
  //     body: JSON.stringify(newAlbum),
  //     headers: { 'Content-Type': 'application/json' },
  //   });

  //   request.then((response) => {
  //     if (!response.ok) {
  //       console.error(response.statusText);
  //     } else {
  //       navigate('/');
  //     }
  //   });
  // };

  // return (
  //   <div>
  //     <Link to="/">Back to Overview</Link>
  //     <AlbumForm onSubmit={handleSubmit} />
  //   </div>
  // );
  const handleSubmit = (newAlbum) => {
    console.log(newAlbum);

    // Replace the connection string and the following code with your actual database integration logic
    const connectionString = "Server=cnsd-db-716882742183.cuwkdwslmzed.us-east-1.rds.amazonaws.com;Port=5432;Database=albumdatabase;User Id=julian;Password=heelsterkpass;";
    const fakeDatabase = connectToDatabase(connectionString);

    // Example code using a fake database connection
    fakeDatabase.insertAlbum(newAlbum)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Link to="/">Back to Overview</Link>
      <AlbumForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateAlbum;

function connectToDatabase(connectionString) {
  return {
    insertAlbum: (album) => {
      return new Promise((resolve, reject) => {
        // Simulate database insert
        setTimeout(() => {
          console.log('Inserting album into the database:', album);
          resolve();
        }, 1000);
      });
    }
  };
}