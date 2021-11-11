import React, { useContext } from "react";
import { ArtworkContext } from "../../providers/ArtworkProvider/ArtworkProvider";
import Artwork from "../Artwork/Artwork";
import "./ArtworkList.scss";

const ArtWorkList = () => {
  const { artworks } = useContext(ArtworkContext);

  return (
    <main className="artwork-list">
      <div className="artwork-list__content">
        <h1 className="artwork-list__content__title">
          Картины эпохи Возрождения
        </h1>

        <div className="artwork-list__content__cards">
          {artworks.map((artwork) => (
            <Artwork key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ArtWorkList;
