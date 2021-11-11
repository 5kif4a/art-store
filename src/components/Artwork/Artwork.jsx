import clsx from "clsx";
import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import "./Artwork.scss";
import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";
import { ArtworkContext } from "../../providers/ArtworkProvider/ArtworkProvider";
import { toggleInCart } from "../../store/artwork.actions";
import { toggleInCartAPI } from "../../api/cart.api";
import Loader from "../Loader/Loader";

const Artwork = ({ artwork }) => {
  const { dispatch } = useContext(ArtworkContext);

  const [isFetching, setIsFetching] = useState(false);

  const handleClick = (artworkId) => {
    setIsFetching(true);
    
    toggleInCartAPI()
      .then(() => {
        dispatch(toggleInCart(artworkId));
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  return (
    <div className={clsx("artwork", { artwork_disabled: artwork.sold })}>
      <img className="artwork__image" src={artwork.image} alt="art" />

      <div className="artwork__content">
        <h2 className="artwork__content__title">{artwork.title}</h2>

        {!artwork.sold ? (
          <div className="artwork__content__control">
            <div className="artwork__content__control__price">
              
              {artwork.initial_price && (
                <p className="artwork__content__control__price__initial">
                  {artwork.initial_price}
                </p>
              )}

              <p className="artwork__content__control__price__final">
                {artwork.final_price}
              </p>
            </div>

            <Button
              onClick={() => handleClick(artwork.id)}
              disabled={isFetching}
            >
              {isFetching ? (
                <Loader />
              ) : !artwork.in_cart ? (
                "Купить"
              ) : (
                <>
                  <CheckIcon style={{ marginRight: "4px" }} /> В корзине
                </>
              )}
            </Button>
          </div>
        ) : (
          <div className="artwork__content__soldout">
            <p>Продана на аукционе</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artwork;
