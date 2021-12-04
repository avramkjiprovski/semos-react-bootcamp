import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { API_URL } from "./config/ApiConstants";
// components
import { Gallery } from "./components/Gallery";
import { Nav } from "./components/Nav";

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/photos`)
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((err) => alert(err));
  }, []);

  const openPhoto = (imageUrl) => {
    setSelectedPhoto(imageUrl);
  };

  const closePhoto = () => {
    setSelectedPhoto("");
  }
  return (
    <div>
      <Nav />
      <Routes>
        <Route
          path="/photos"
          element={
            <Gallery
              listOfPhotos={photos}
              openPhoto={openPhoto}
              selectedPhoto={selectedPhoto}
              closePhoto={closePhoto}
            />
          }
        />
      </Routes>
    </div>
  );
};
