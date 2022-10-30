import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import s from './search.module.css';

export const Searchbar = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  
  const handleChange = event => {
    setQuery(event.currentTarget.value);
  };

 const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      alert('Please fill out the search field');
      return;
    }
    onSubmit(query);
    setQuery('');
  };


    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.searchFormButton}><ImSearch/></button>

          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
