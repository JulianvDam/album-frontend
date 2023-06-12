import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppBar, Toolbar, Container } from '@material-ui/core';
import { Route, Routes } from 'react-router-dom';
import AlbumOverview from './components/AlbumOverview';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            My Application
          </Link>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<AlbumOverview />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
