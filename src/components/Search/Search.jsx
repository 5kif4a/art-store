import React from "react";
import Button from "../Button/Button";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search">
      <input className="search__input" placeholder="Поиск по названию картины"/>
      <Button>Найти</Button>
    </div>
  );
};

export default Search;
