import React, { createContext, useEffect, useReducer } from "react";
import { artworkReducer, initializer } from "../../store/artwork.reducer";

export const ArtworkContext = createContext();

export const ArtworkProvider = ({ children }) => {
  const [artworks, dispatch] = useReducer(artworkReducer, initializer());

  useEffect(() => {
    localStorage.setItem("artworks", JSON.stringify(artworks));
  }, [artworks]);

  return (
    <ArtworkContext.Provider
      value={{
        artworks,
        dispatch,
      }}
    >
      {children}
    </ArtworkContext.Provider>
  );
};
