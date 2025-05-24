import React from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import s from "./SearchBar.module.css";

interface Props {
  onSubmit: (e: FormEvent) => void;
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSubmit, setQuery }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
