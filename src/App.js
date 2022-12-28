import React from 'react';
import Header from './components/header/Header';
import AlbumContext from './contexts/AlbumContext';

function App() {
  
  return (
    <AlbumContext>
      <Header/>
    </AlbumContext>
  );
}

export default App;
