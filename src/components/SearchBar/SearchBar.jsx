import React from "react";
import { useState } from "react";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit, setQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
          className={s.input}
        />
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
