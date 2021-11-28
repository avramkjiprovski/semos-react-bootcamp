import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
// components
import { Nav } from './components/Nav';
import {Home} from './components/Home';
import { Albums } from './components/Albums';
import {Posts} from './components/Posts';


export const App = () => {

  const [albums, setAlbums] = useState([]);

  const getAlbums = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();
    setAlbums(data);
  }

  useEffect(() => {
    getAlbums();
  }, [])

  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums albums={albums} />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  )
}