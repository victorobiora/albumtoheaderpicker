import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import AlbumContext from './contexts/AlbumContext';

function App() {
  
  return (
    <AlbumContext>
      <Header/>
      <Main />
    </AlbumContext>
  );
}

export default App;
